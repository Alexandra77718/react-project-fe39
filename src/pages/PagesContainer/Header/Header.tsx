import React, { useMemo, useState } from "react";
import styles from "./Header.module.scss";
import BurgerButton from '../../../components/BurgerButton';
import UserName from '../../../components/UserName';
import ThemeSwitcher from "../../../components/ThemeSwitcher";
import Button from "../../../components/Button";
import { ButtonType } from "../../../components/Button/Button";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { RoutesList } from "../../Router";
import classNames from "classnames";

const Header = () => {
  const navButtonsList = useMemo(
    () => [
      {
        title: "Home",
        key: RoutesList.Home,
      },
      {
        title: "Add Post",
        key: RoutesList.AddPost,
      },
    ],
    []
  );
  const [isOpened, setOpened] = useState(false);
  const onClick = () => {
    return setOpened(!isOpened);
  };
  const navigate = useNavigate();
  const location = useLocation();

  const onAuthButtonClick = () => {
    navigate(RoutesList.SignIn);
  };
  return (
    <>
      <div className={styles.container}>
        <BurgerButton isOpened={isOpened} onClick={onClick} />
        <div className={styles.userName}>
          <UserName username={"Artem Malkin"} />
        </div>
      </div>
      {isOpened && (
        <div className={styles.menuContainer}>
          <div className={styles.actionsContainer}>
            <div className={styles.userNameMenu}>
              <UserName username={"Artem Malkin"} />
            </div>
            <div>
              {navButtonsList.map(({ key, title }) => {
                return (
                  <NavLink
                    to={key}
                    key={key}
                    className={classNames(styles.navButton, {
                      [styles.activeNavButton]: location.pathname === key,
                    })}
                  >
                    {title}
                  </NavLink>
                );
              })}
            </div>
          </div>
          <div>
            <ThemeSwitcher />
            <Button
              title={"Sign In"}
              onClick={onAuthButtonClick}
              type={ButtonType.Secondary}
              className={styles.authButton}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;