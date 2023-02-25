import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './Title.module.scss';

type TitleProps = {
    title: string;
};

const Title: FC<TitleProps> = ({ title }) => {
    return(
        <span className={styles.title}>{title}</span>
    )
};

export default Title;