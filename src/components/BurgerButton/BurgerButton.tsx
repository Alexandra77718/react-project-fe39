import React, {useState, FC } from 'react';
import styles from './BurgerButton.module.scss';
import { CloseIcon, OpenedMenu } from "../../assets/icons";
import Button from '../Button';
import { ButtonType } from '../Button/Button';

type BurgerButtonProps = {
    isOpened: boolean;
    onClick: () => void;
}
const BurgerButton: FC <BurgerButtonProps>= ({isOpened, onClick}) => {
    return (
        <Button
            title={!isOpened ? <OpenedMenu /> : <CloseIcon />}
            onClick={onClick}
            type={ButtonType.Primary}
            className={styles.burgerButton}
        />
    );
}
 
export default BurgerButton;
