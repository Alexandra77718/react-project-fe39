import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeSlice";
import postReducer from './reducers/postSlice';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
        theme: themeReducer,
      posts: postReducer, 
    },
    middleware:[sagaMiddleware]
});

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>;

export default store;