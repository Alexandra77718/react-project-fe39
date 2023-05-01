import React, { FC } from 'react';
import styles from './PostPage.module.scss';
import { LikeIcon, DislikeIcon, BookmarkIcon, MoreIcon } from '../../assets/icons';
import { PostPageProps } from './types';
import classNames from "classnames";
import {Theme, useThemeContext} from "../../context/Theme/Context";

const PostPage: FC<PostPageProps> = ({ page }) => {
    const { image, text, title } = page;
    const {theme} = useThemeContext()
    return (
        <div className={styles.container}>
            <div className={styles.breadCrumbs}>
                <div className={classNames(styles.home, {
                    [styles.darkHome]: theme ===Theme.Dark,
                })}
                >Home</div>
                <div className={styles.delimiter}>|</div>
                <div className={styles.post}>Post 14278</div>
            </div>

            <div className={styles.pageContent}>
                <div className={classNames(styles.title, {
                    [styles.darkTitle]: theme === Theme.Dark,
                })}>{title}</div>
                <img src={image} className={styles.image} />
                <div className={classNames(styles.text, {
                    [styles.darkText]: theme === Theme.Dark,
                })}
                >{text}</div>
            </div>

            <div className={styles.iconsContainer}>
                <div className={styles.iconsLike}>
                    <div className={styles.iconLike}><LikeIcon /></div>
                    <div className={styles.iconDislike}><DislikeIcon /></div>
                </div>
                <div className={styles.iconBookmark}><BookmarkIcon />Add to favorites</div>
            </div>

        </div>
    );
};

export default PostPage;