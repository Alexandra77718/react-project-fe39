import React, { FC } from 'react';
import styles from './BurgerButton.module.scss';
import { CloseIcon, OpenedMenu } from "src/assets/icons";
import Button from '../Button';
import {ButtonType} from "src/utils/@globalTypes";

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
