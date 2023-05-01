import React, {useState, FC, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './BurgerButton.module.scss';
import { CloseIcon, OpenedMenu } from "../../assets/icons";
import Button from '../Button';
import { ButtonType } from '../Button/Button';


const BurgerButton = () => {
    const [isOpened, setOpened] = useState(false);

    const onClick = () => {
        setOpened(!isOpened)
    }
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
