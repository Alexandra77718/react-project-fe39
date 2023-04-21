import React, { FC, ReactNode } from "react";
import styles from './UserName.module.scss';
import BurgerButton from "../BurgerButton/BurgerButton";
import {UserInfoResponse} from "../../redux/sagas/@types";

type UserNameProps = {
    username: string,
    className?: string,
};

const UserName: FC<UserNameProps> = ({ username, className }) => {
    const userLogo: string = username.split(' ').map(elem => elem[0].toUpperCase()).join('')

    return (
        <div className={styles.container}>
            <div className={styles.userLogo}>
                <div className={styles.userLogoLetters}>{userLogo}</div>
            </div>
            <div className={styles.userName}>{username}</div>
        </div>
    );
};

export default UserName;