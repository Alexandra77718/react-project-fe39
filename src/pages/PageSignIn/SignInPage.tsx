import React, { useState } from "react";
import styles from "./SignIn.module.scss";
import Title from "../../components/Title";
import Input from "../../components/Input";
import classNames from "classnames";
import Button from "../../components/Button";
import { ButtonType } from "../../components/Button/Button";
import { Theme, useThemeContext } from "../../context/Theme/Context";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (value: string) => {
    setEmail(value);
  };

  const onChangePassword = (value: string) => {
    setPassword(value);
  };

  const { theme } = useThemeContext();
  const isDark = theme === Theme.Dark;

  return (
    <div
      className={classNames(styles.container, {
        [styles.containerDark]: isDark,
      })}
    >
      <div
        className={classNames(styles.backHome, {
          [styles.backHomeDark]: isDark,
        })}
      >
        Back to home
      </div>
      <div className={classNames(styles.title)}>
        <Title title={"Sign In"} />
      </div>
      <div className={styles.wrapper}>
        <div
          className={classNames(styles.inputContainer, {
            [styles.inputContainerDark]: isDark,
          })}
        >
          <Input
            value={email}
            onChange={onChangeEmail}
            type={"text"}
            title="E-mail"
            placeholder="Your e-mail"
          />
          <Input
            value={password}
            onChange={onChangePassword}
            type={"password"}
            title="Password"
            placeholder="Your password"
          />
          <div
            className={classNames(styles.forgotPassword, {
              [styles.darkThemeForgotPassword]: isDark,
            })}
          >
            Forgot password?
          </div>
          <div className={styles.button}>
            <Button
              title={"Sign In"}
              onClick={() => {}}
                type={ButtonType.Primary} />
            <div
              className={classNames(styles.signUp, {
                [styles.darkSignUp]: isDark,
              })}
            >
                          Don’t have an account?
                          <span className={styles.linkSignUp}>Sign Up</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
