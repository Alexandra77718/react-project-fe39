import React, { useMemo, useState } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames";
import BurgerButton from "../../../components/BurgerButton";
import UserName from "../../../components/UserName";
import ThemeSwitcher from "../../../components/ThemeSwitcher";
import Button from "../../../components/Button";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { RoutesList } from "../../Router";
import { UserIcon } from "../../../assets/icons";
import { ButtonType } from "../../../utils/@globalTypes";

const Header = () => {
  const [isOpened, setOpened] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = true;

  const onButtonClick = () => {
    setOpened(!isOpened);
  };
  const onAuthButtonClick = () => {
    navigate(RoutesList.SignIn);
  };

  const navButtonsList = useMemo(
    () => [
      {
        title: "Home",
        key: RoutesList.Home,
      },
      ...(!isLoggedIn
        ? []
        : [
            {
              title: "Add Post",
              key: RoutesList.AddPost,
            },
          ]),
    ],
    [isLoggedIn]
  );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.btnBurger}>
          <BurgerButton isOpened={isOpened} onClick={onButtonClick} />
        </div>
        <div className={styles.userName}>
          {isLoggedIn ? <UserName username={"Artem Malkin"} /> : <UserIcon />}
        </div>
      </div>
      {isOpened && (
        <div className={styles.menuContainer}>
          <div className={styles.actionsContainer}>
            {isLoggedIn && (
              <div className={styles.userNameMenu}>
                <UserName username={"Artem Malkin"} />
              </div>
            )}
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
              title={isLoggedIn ? "Log out" : "Sign In"}
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
