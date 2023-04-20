import React, { FC, useState } from "react";
import Card from '../Card/Card';
import { CardType } from "../../utils/@globalTypes";
import { CardSize } from "../../utils/@globalTypes";
import styles from "./PostModalWindow.module.scss";
import { usePostVisibilityContext } from "../../context/PostVisibility/Context";
import { ClosePostIcon } from "../../assets/icons";

type PostModalWindowProps = {
  post: CardType;
};

const PostModalWindow: FC<PostModalWindowProps> = ({ post }) => {
  const { postVisibility, onChangePostVisibility } = usePostVisibilityContext();
  const onCloseBtnClick = (post: null, isPostOpened: boolean) => () => {
    onChangePostVisibility(post, isPostOpened);
  };
  return (
    <div>
      {postVisibility && (
        <div className={styles.modalWindow}>
          <div className={styles.wrapper}>
            <div
              className={styles.closeBtn}
              onClick={onCloseBtnClick(null, false)}
            >
              <ClosePostIcon />
            </div>
            <Card card={post} size={CardSize.Large} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PostModalWindow;
