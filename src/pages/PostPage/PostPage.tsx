import React, { FC } from 'react';
import styles from './PostPage.module.scss';
import { LikeIcon, DislikeIcon, BookmarkIcon, MoreIcon } from '../../assets/icons';
import { PostPageProps } from './types';

const PostPage: FC<PostPageProps> = ({ page }) => {
    const { image, text, title } = page;
    return (
        <div className={styles.container}>
            <div className={styles.breadCrumbs}>
                <div className={styles.home}>Home</div>
                <div className={styles.delimiter}>|</div>
                <div className={styles.post}>Post 14278</div>
            </div>

            <div className={styles.pageContent}>
                <div className={styles.title}>{title}</div>
                <img src={image} className={styles.image} />
                <div className={styles.text}>{text}</div>
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