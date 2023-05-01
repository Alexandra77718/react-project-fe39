import React, { useEffect, useMemo, useState } from "react";
import styles from "./SignUp.module.scss";
import Input from "../../../components/Input";
import classNames from "classnames";
import Button from "../../../components/Button";
import { ButtonType } from "../../../utils/@globalTypes";
import { Theme, useThemeContext } from "../../../context/Theme/Context";
import { RoutesList } from "../../Router";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../../redux/reducers/authSlice";
import FormPages from "src/pages/FormPages/FormPages";

const SignUp = () => {
  const { theme } = useThemeContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isDark = theme === Theme.Dark;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameTouched, setNameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onChangeEmail = (value: string) => {
    setEmail(value);
  };
  const onChangePassword = (value: string) => {
    setPassword(value);
  };
  const onChangeName = (value: string) => {
    setName(value);
  };
  const onChangeConfirmPassword = (value: string) => {
    setConfirmPassword(value);
  };

  const onBlurEmail = () => {
    setEmailTouched(true);
  };

  const onBlurPassword = () => {
    setPasswordTouched(true);
  };

  const onBlurName = () => {
    setNameTouched(true);
  };

  const onSignUpClick = () => {
    dispatch(
      signUpUser({
        data: { username: name, email, password },
        callback: () => navigate(RoutesList.SignIn),
      })
    );
  };

  useEffect(() => {
    if (name.length === 0 && nameTouched) {
      setNameError("Name is required field");
    } else {
      setNameError("");
    }
  }, [name, nameTouched]);

  useEffect(() => {
    if (email.length === 0 && emailTouched) {
      setEmailError("Email is required field");
    } else {
      setEmailError("");
    }
  }, [email, emailTouched]);

  useEffect(() => {
    if (passwordTouched) {
      if (password !== confirmPassword) {
        setPasswordError("Passwords must match");
      } else if (password.length === 0 || confirmPassword.length === 0) {
        setPasswordError("Password is required field");
      } else {
        setPasswordError("");
      }
    }
  }, [confirmPassword, password, passwordTouched]);

  const isValid = useMemo(() => {
    return (
      nameError.length === 0 &&
      emailError.length === 0 &&
      passwordError.length === 0 &&
      nameTouched &&
      emailTouched &&
      passwordTouched
    );
  }, [
    nameError,
    emailError,
    passwordError,
    nameTouched,
    emailTouched,
    passwordTouched,
  ]);

  return (
    <FormPages title={"Sign Up"}>
      <div
        className={classNames(styles.inputContainer, {
          [styles.inputContainerDark]: isDark,
        })}
      >
        <Input
          value={name}
                  onChange={onChangeName}
                  onBlur={onBlurName}
          type={"text"}
          title="Name"
          placeholder="Your name"
          errorText={nameError}
        />

        <Input
          value={email}
                  onChange={onChangeEmail}
                  onBlur={onBlurEmail}
          type={"text"}
          title="Email"
          placeholder="Your email"
          errorText={emailError}
        />
        <Input
          value={password}
                  onChange={onChangePassword}
                  onBlur={onBlurPassword}
          type={"password"}
          title="Password"
          placeholder="Your password"
          errorText={passwordError}
        />
        <Input
          value={confirmPassword}
                  onChange={onChangeConfirmPassword}
                  onBlur={onBlurPassword}
          type={"password"}
          title="Confirm password"
          placeholder="Confirm password"
          errorText={passwordError}
        />

        <div className={styles.button}>
          <Button
            title={"Sign Up"}
            disabled={!isValid}
            onClick={onSignUpClick}
            type={ButtonType.Primary}
          />
        </div>
        <div
          className={classNames(styles.singUp, {
            [styles.darkSingUp]: isDark,
          })}
        >
          Already have an account?
          <NavLink to={RoutesList.SignIn} className={styles.navButton}>
            Sign In
          </NavLink>
        </div>
      </div>
    </FormPages>
  );
};

export default SignUp;
