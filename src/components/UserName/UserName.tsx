import React, { FC, ReactNode } from "react";
import classNames from "classnames";

import styles from './UserName.module.scss';

type UserNameProps = {
    username: string;
    
};

const UserName: FC<UserNameProps> = ({ username }) => {
    return (
        <div>{username}</div> 
    )
};

export default UserName;