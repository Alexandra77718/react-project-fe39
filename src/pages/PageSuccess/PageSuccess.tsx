import React from "react";
import styles from "./PageSuccess.module.scss";
import Title from "../../components/Title";
import classNames from "classnames";
import Button from "../../components/Button";
import { ButtonType } from "../../components/Button/Button";
import { Theme, useThemeContext } from "../../context/Theme/Context";
import { RoutesList } from "../Router";
import { NavLink } from "react-router-dom";


const Success = () => {
    const { theme } = useThemeContext();
    const isDark = theme === Theme.Dark;

    return (
        <div className={classNames(styles.container, {
            [styles.containerDark]: isDark,
        })}
        >
            <NavLink to={RoutesList.Home}
                className={classNames(styles.backToHome, {
                [styles.backToHomeDark]: isDark
            })}
            >Back to home </NavLink>
            <div className={classNames(styles.title)}>
                <Title title={'Success'} />
            </div>
            <div className={styles.wrapper}>
                <div className={classNames(styles.emailText, {
                    [styles.emailTextDark]: isDark,
                })}
                >
                    <div>E-mail confirmed.</div>
                    Your registration is now completed
                    <div className={styles.button}>
                        <Button title={'Go to home'}
                            onClick={() => { }}
                            type={ButtonType.Primary} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Success;

