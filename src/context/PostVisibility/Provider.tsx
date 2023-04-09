import React, { FC, ReactNode } from "react";
import { CardType } from "../../components/Card";
import { PostVisibilityContext } from "./Context";

type PostVisibilityProviderProps = {
  children: ReactNode;
  postVisibility: boolean;
  onChangePostVisibility: (
    post: CardType | null,
    isPostOpened: boolean
  ) => void;
};
const PostVisibilityProvider: FC<PostVisibilityProviderProps> = ({
  children,
  postVisibility,
  onChangePostVisibility,
}) => {
  return (
    <PostVisibilityContext.Provider
      value={{ postVisibility, onChangePostVisibility }}
    >
      {children}
    </PostVisibilityContext.Provider>
  );
};

export default PostVisibilityProvider;
