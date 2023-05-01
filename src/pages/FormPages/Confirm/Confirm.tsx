import React from "react";
import styles from "./Confirm.module.scss";
import classNames from "classnames";
import Button from "../../../components/Button";
import { ButtonType } from "../../../utils/@globalTypes";
import { Theme, useThemeContext } from "../../../context/Theme/Context";
import { useNavigate, useParams } from "react-router-dom";
import { RoutesList } from "../../Router";
import { useDispatch } from "react-redux";
import { activateUser } from "../../../redux/reducers/authSlice";
import FormPages from "../FormPages";

const Confirm = () => {
  const { theme } = useThemeContext();
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const { uid, token } = useParams();

  const isDark = theme === Theme.Dark;


  const onConfirmButtonClick = () => {
    if (uid && token) {
      dispatch(
        activateUser({
          data: { uid, token },
          callback: () => navigate(RoutesList.Success),
        })
      );
    }
  };

  return (
    <FormPages title={"Registration Confirmation"}>
        <div
          className={classNames(styles.emailText, {
            [styles.emailTextDark]: isDark,
          })}
        >
          Please activate your account with the activation link in the email
          example@gmail.com. Please, check your email
          <div className={styles.button}>
            <Button
              title={"Confirm"}
              onClick={onConfirmButtonClick}
              type={ButtonType.Primary}
            />
          </div>
        </div>
      </FormPages>
  );
};

export default Confirm;
