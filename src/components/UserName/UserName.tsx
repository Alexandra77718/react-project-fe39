import React, { FC, ReactNode } from "react";
import classNames from "classnames";

import styles from './UserName.module.scss';

type UserNameProps = {
    username: string;
};

const UserName: FC<UserNameProps> = ({ username }) => {
    const userLogo: string = username.split(' ').map(elem => elem[0].toUpperCase()).join('')

    return (
        <div className={styles.container}>
            <div className={styles.userLogo}>
                <div className={styles.userLogoLetters}>{userLogo}</div>
            </div>
            <div className={styles.userName}>{username}</div>
        </div>
    )
};

export default UserName;