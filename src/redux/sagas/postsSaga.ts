import { ApiResponse } from "apisauce";
import { takeLatest, all, call, put, takeLeading } from "redux-saga/effects";

import API from "../api";
import {
  addNewPost,
  getAllPosts,
  getMyPosts,
  getSearchedPosts,
  getSinglePost,
  setMyPosts,
  setAllPosts,
  setAllPostsLoading,
  setSinglePost,
  setSearchedPosts,
} from "src/redux/reducers/postSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { AllPostsResponse } from "./@types";
import { CardType } from "src/utils/@globalTypes";
import callCheckingAuth from "src/redux/sagas/callCheckingAuth";
import { AddPostPayload, GetAllPostsPayload,  GetSearchPostsPayload, } from "src/redux/reducers/@types";

function* getAllPostsWorker(action: PayloadAction<GetAllPostsPayload>) {
  const { offset, ordering } = action.payload;
  const { ok, data, problem }: ApiResponse<AllPostsResponse> = yield call(
    API.getPosts, offset, "", ordering
  );
  if (ok && data) {
    yield put(setAllPosts({ cardList: data.results, postsCount: data.count }));
  } else {
    console.warn("Error getting all posts", problem);
  }
}

function* getSinglePostWorker(action: PayloadAction<string>) {
  const { ok, data, problem }: ApiResponse<CardType> = yield call(
    API.getSinglePost,
    action.payload
  );
  if (ok && data) {
    yield put(setSinglePost(data));
  } else {
    console.warn("Error getting single post", problem);
  }
}

function* getMyPostsWorker() {
    yield put(setAllPostsLoading(true));
  const { ok, data, problem }: ApiResponse<AllPostsResponse> =
    yield callCheckingAuth(API.getMyPosts);
  if (ok && data) {
    yield put(setMyPosts(data.results));
  } else {
    console.warn("Error getting my posts", problem);
    }
    yield put(setAllPostsLoading(false));
}

function* getSearchedPostsWorker(action: PayloadAction<GetSearchPostsPayload>) {
    const { searchValue, isOverwrite, offset } = action.payload;
    const { ok, data, problem }: ApiResponse<AllPostsResponse> = yield call(
    API.getPosts,
    offset,
    searchValue
  );
  if (ok && data) {
    yield put(
        setSearchedPosts({
          cardList: data.results,
          postsCount: data.count,
          isOverwrite,
        })
      );
  } else {
    console.warn("Error getting all posts", problem);
  }
}

function* addNewPostWorker(action: PayloadAction<AddPostPayload>) {
  const { data, callback } = action.payload;
  const { ok, problem }: ApiResponse<undefined> = yield callCheckingAuth(
    API.addPost,
    data
  );
  if (ok) {
    callback();
  } else {
    console.warn("Error adding post", problem);
  }
}

export default function* postsSaga() {
  yield all([
    takeLatest(getAllPosts, getAllPostsWorker),
    takeLatest(getSinglePost, getSinglePostWorker),
    takeLatest(getMyPosts, getMyPostsWorker),
    takeLeading(getSearchedPosts, getSearchedPostsWorker),
    takeLatest(addNewPost, addNewPostWorker),
  ]);
}
