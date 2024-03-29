import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CardType, CardListType } from "src/utils/@globalTypes";
import {
  GetAllPostsPayload,
  SetAllPostsPayload,
  AddPostPayload,
  GetSearchPostsPayload,
  SetSearchedPostsPayload,
} from "src/redux/reducers/@types";

export enum LikeStatus {
  Like = "like",
  Dislike = "disLike",
}

type InitialType = {
  selectedPost: CardType | null;
  isVisibleSelectedModal: boolean;
  likedPosts: CardListType;
  dislikedPosts: CardListType;
  savedPosts: CardListType;
  postsList: CardListType;
  singlePost: CardType | null;
  myPosts: CardListType;
  searchedPosts: CardListType;
  searchValue: string;
  postsCount: number;
  isAllPostsLoading: boolean;
  searchedPostsCount: number;
};

const initialState: InitialType = {
  selectedPost: null,
  isVisibleSelectedModal: false,
  likedPosts: [],
  dislikedPosts: [],
  savedPosts: [],
  postsList: [],
  singlePost: null,
  myPosts: [],
  searchedPosts: [],
  searchValue: "",
  postsCount: 0,
  searchedPostsCount: 0,
  isAllPostsLoading: false,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getAllPosts: (_, __: PayloadAction<GetAllPostsPayload>) => {},
    setAllPosts: (
      state,
      { payload: { postsCount, cardList } }: PayloadAction<SetAllPostsPayload>
    ) => {
      state.postsList = cardList;
      state.postsCount = postsCount;
    },
    getSinglePost: (state, action: PayloadAction<string>) => {},
    setSinglePost: (state, action: PayloadAction<CardType | null>) => {
      state.singlePost = action.payload;
    },

    getMyPosts: (state, action: PayloadAction<undefined>) => {},
    setMyPosts: (state, action: PayloadAction<CardListType>) => {
      state.myPosts = action.payload;
    },

    setSelectedPost: (state, action: PayloadAction<CardType | null>) => {
      state.selectedPost = action.payload;
    },
    setPostVisibility: (state, action: PayloadAction<boolean>) => {
      state.isVisibleSelectedModal = action.payload;
    },
    setStatus: (
      state,
      action: PayloadAction<{ status: LikeStatus; card: CardType }>
    ) => {
      const { status, card } = action.payload;
      const likedIndex = state.likedPosts.findIndex(
        (post) => post.id === card.id
      );
      const dislikedIndex = state.dislikedPosts.findIndex(
        (post) => post.id === card.id
      );

      const isLike = status === LikeStatus.Like;

      const mainKey = isLike ? "likedPosts" : "dislikedPosts";
      const secondaryKey = isLike ? "dislikedPosts" : "likedPosts";
      const mainIndex = isLike ? likedIndex : dislikedIndex;
      const secondaryIndex = isLike ? dislikedIndex : likedIndex;

      if (mainIndex === -1) {
        state[mainKey].push(card);
      } else {
        state[mainKey].splice(mainIndex, 1);
      }
      if (secondaryIndex > -1) {
        state[secondaryKey].splice(secondaryIndex, 1);
      }
    },
    setSavedPosts: (state, action: PayloadAction<CardType>) => {
      const savedPostsIndex = state.savedPosts.findIndex(
        (post) => post.id === action.payload.id
      );
      if (savedPostsIndex === -1) {
        state.savedPosts.push(action.payload);
      } else {
        state.savedPosts.splice(savedPostsIndex, 1);
      }
    },
    getSearchedPosts: (state, action: PayloadAction<GetSearchPostsPayload>) => {
      state.searchValue = action.payload.searchValue;
    },
    setSearchedPosts: (
      state,
      action: PayloadAction<SetSearchedPostsPayload>
    ) => {
      const { isOverwrite, cardList, postsCount } = action.payload;
      state.searchedPostsCount = postsCount;
      if (isOverwrite) {
        state.searchedPosts = cardList;
      } else {
        state.searchedPosts.push(...cardList);
      }
    },
    addNewPost: (_, __: PayloadAction<AddPostPayload>) => {},
    setAllPostsLoading: (state, action: PayloadAction<boolean>) => {
      state.isAllPostsLoading = action.payload;
    },
  },
});

export const {
  setSelectedPost,
  setPostVisibility,
  setStatus,
  setSavedPosts,
  getAllPosts,
  setAllPosts,
  getSinglePost,
  setSinglePost,
  setMyPosts,
  getMyPosts,
  getSearchedPosts,
  setSearchedPosts,
  addNewPost,
  setAllPostsLoading,
} = postSlice.actions;

export default postSlice.reducer;

export const PostSelectors = {
  getSelectedPost: (state: RootState) => state.posts.selectedPost,
  getVisibleSelectedModal: (state: RootState) =>
    state.posts.isVisibleSelectedModal,
  getLikedPosts: (state: RootState) => state.posts.likedPosts,
  getDislikedPosts: (state: RootState) => state.posts.dislikedPosts,
  getSavedPosts: (state: RootState) => state.posts.savedPosts,
  getAllPosts: (state: RootState) => state.posts.postsList,
  getSinglePost: (state: RootState) => state.posts.singlePost,
  getMyPosts: (state: RootState) => state.posts.myPosts,
  getSearchedPosts: (state: RootState) => state.posts.searchedPosts,
  getSearchValue: (state: RootState) => state.posts.searchValue,
  getAllPostsCount: (state: RootState) => state.posts.postsCount,
  getAllPostsLoading: (state: RootState) => state.posts.isAllPostsLoading,
  getSearchedPostsCount: (state: RootState) => state.posts.searchedPostsCount,
};
