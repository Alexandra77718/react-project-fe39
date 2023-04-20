import { createContext, useContext } from "react";
import { CardType } from "../../utils/@globalTypes";

const initialState = {
  postVisibility: false,
  onChangePostVisibility: (post: CardType | null, isPostOpened: boolean) => {},
};

export const PostVisibilityContext = createContext(initialState);

export const usePostVisibilityContext = () => useContext(PostVisibilityContext);
