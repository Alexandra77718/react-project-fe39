import React from "react";
import styles from "./Success.module.scss";
import Title from "../../../components/Title";
import classNames from "classnames";
import Button from "../../../components/Button";
import { ButtonType } from "../../../utils/@globalTypes";
import { Theme, useThemeContext } from "../../../context/Theme/Context";
import { RoutesList } from "../../Router";
import { useNavigate } from "react-router-dom";
import FormPages from "../FormPages";

const Success = () => {
  const { theme } = useThemeContext();
  const navigate = useNavigate();

  const isDark = theme === Theme.Dark;

  const onGoHomeButtonClick = () => {
    navigate(RoutesList.Home);
  };

  return (
    <FormPages title={"Success"}>
      <div
        className={classNames(styles.emailText, {
          [styles.emailTextDark]: isDark,
        })}
      >
        <div>E-mail confirmed.</div>
        Your registration is now completed
        <div className={styles.button}>
          <Button
            title={"Go to home"}
            onClick={onGoHomeButtonClick}
            type={ButtonType.Primary}
          />
        </div>
      </div>
    </FormPages>
  );
};

export default Success;
