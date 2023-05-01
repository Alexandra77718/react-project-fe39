import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { Theme, useThemeContext } from "../../context/Theme/Context";

import styles from './Title.module.scss';

type TitleProps = {
    title: string;
};

const Title: FC<TitleProps> = ({ title }) => {
    const { theme } = useThemeContext();
    return (<span className={classNames(styles.title, {
        [styles.darkTitle]: theme === Theme.Dark,
    })}>{title}
    </span>
    );
};

export default Title;