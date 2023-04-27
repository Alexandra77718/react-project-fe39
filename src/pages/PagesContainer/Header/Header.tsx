import React, { useMemo, useState, KeyboardEvent } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames";
import BurgerButton from "src/components/BurgerButton";
import UserName from "src/components/UserName";
import ThemeSwitcher from "src/components/ThemeSwitcher";
import Button from "src/components/Button";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { RoutesList } from "src/pages/Router";
import { UserIcon, SearchIcon } from "src/assets/icons";
import { ButtonType } from "src/utils/@globalTypes";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelectors, logoutUser } from "src/redux/reducers/authSlice";
import Input from "src/components/Input";
import { getSearchedPosts } from "src/redux/reducers/postSlice";

const Header = () => {
  const [isOpened, setOpened] = useState(false);
  const [isInputOpened, setInputOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);
  const userInfo = useSelector(AuthSelectors.getUserInfo);

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

  const onButtonClick = () => {
    return setOpened(!isOpened);
  };
  const onAuthButtonClick = () => {
    navigate(RoutesList.SignIn);
  };
  const onLogoutClick = () => {
    dispatch(logoutUser());
  };

  const onClickSearchButton = () => {
    setInputOpened(!isInputOpened);
    if (isInputOpened) {
        dispatch(getSearchedPosts(
            { searchValue, isOverwrite: true, offset: 0 }
        ));
        setSearchValue('')
      navigate(RoutesList.Search);
    }
  };

  // поиск из строки search при нажатии на enter
  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onClickSearchButton();
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <BurgerButton isOpened={isOpened} onClick={onButtonClick} />
          {isInputOpened && (
            <Input
              value={searchValue}
              onChange={setSearchValue}
              className={styles.input}
              placeholder="Search..."
              type={"text"}
              onKeyDown={onKeyDown}
            />
          )}
        </div>
        <div className={styles.infoContainer}>
          <Button
            title={<SearchIcon />}
            onClick={onClickSearchButton}
            type={ButtonType.Primary}
            className={styles.button}
          />
          <div className={styles.userName} onClick={onAuthButtonClick}>
            {isLoggedIn && userInfo ? (
              <UserName username={userInfo?.username} />
            ) : (
              <UserIcon />
            )}
          </div>
        </div>
      </div>

      {isOpened && (
        <div className={styles.menuContainer}>
          <div className={styles.actionsContainer}>
            {isLoggedIn && (
              <div className={styles.userNameMenu}>
                {userInfo ? <UserName username={userInfo?.username} /> : null}
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
              onClick={isLoggedIn ? onLogoutClick : onAuthButtonClick}
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
