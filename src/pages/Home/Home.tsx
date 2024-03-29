import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import styles from "./Home.module.scss";
import classNames from "classnames";
import Button from "src/components/Button";
import Title from "src/components/Title";
import Tabs from "src/components/Tabs";
import CardsList from "src/components/CardsList";
import SelectedPostModal from "./SelectedPostModal";
import { getAllPosts, PostSelectors } from "src/redux/reducers/postSlice";
import { ButtonType, TabsNames } from "src/utils/@globalTypes";
import { PER_PAGE } from "src/utils/constants";
import Loader from "src/components/Loader";
import { AuthSelectors } from "src/redux/reducers/authSlice";

enum Order {
    Date = "date",
    Title = "title",
  }

const Home = () => {
  const [activeTab, setActiveTab] = useState(TabsNames.All);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordering, setOrdering] = useState("");

  const dispatch = useDispatch();

  const postsList = useSelector(PostSelectors.getAllPosts);
  const popularList = useSelector(PostSelectors.getLikedPosts);
  const myPosts = useSelector(PostSelectors.getMyPosts);
  const favouritesList = useSelector(PostSelectors.getSavedPosts);
  const postsCount = useSelector(PostSelectors.getAllPostsCount);
  const pagesCount = Math.ceil(postsCount / PER_PAGE);
  const isLoading = useSelector(PostSelectors.getAllPostsLoading);


  const getCurrentList = () => {
    switch (activeTab) {
      case TabsNames.Popular:
        return popularList;
      case TabsNames.MyPosts:
        return myPosts;
      case TabsNames.Favourites:
        return favouritesList;
      case TabsNames.All:
      default:
        return postsList;
    }
  };

  const onTabClick = (key: TabsNames) => {
    setActiveTab(key);
    setCurrentPage(1);
  };
  const onOrderButtonClick = (order: Order) => () => {
    if (order === ordering) {
      setOrdering("");
      setCurrentPage(1);
    } else {
      setOrdering(order);
    }
  };
  const onPageChange = ({ selected }: { selected: number }) => {
    console.log(selected);
    setCurrentPage(selected + 1);
  };

  useEffect(() => {
    const offset = PER_PAGE * (currentPage - 1);
      dispatch(getAllPosts({ ordering, offset }));
  }, [currentPage, ordering]);

  return (
    <div>
      <Title title={"Blog"} />
      <Tabs activeTab={activeTab} onClick={onTabClick} />
      <div className={styles.allBtnSort}>
        <Button
          title={"Date"}
          onClick={onOrderButtonClick(Order.Date)}
          type={ButtonType.Secondary}
          className={classNames(styles.btnSort, {
            [styles.activeButton]: ordering === Order.Date,
          })}
        />
        <Button
          title={"Title"}
          onClick={onOrderButtonClick(Order.Title)}
          type={ButtonType.Secondary}
          className={classNames(styles.btnSort, {
            [styles.activeButton]: ordering === Order.Title,
          })}
        />
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CardsList cardsList={getCurrentList()} />
          <SelectedPostModal />
          {activeTab !== TabsNames.Popular &&
            activeTab !== TabsNames.Favourites && (
              <ReactPaginate
                pageCount={pagesCount}
                onPageChange={onPageChange}
                containerClassName={styles.pagesContainer}
                pageClassName={styles.pageNumber}
                breakClassName={styles.pageNumber}
                breakLinkClassName={styles.linkPage}
                activeLinkClassName={styles.linkPage}
                pageLinkClassName={styles.linkPage}
                activeClassName={styles.activePageNumber}
                nextClassName={classNames(styles.arrowButton, {
                  [styles.blockedButton]: currentPage === pagesCount,
                })}
                previousClassName={classNames(styles.arrowButton, {
                  [styles.blockedButton]: currentPage === 1,
                })}
                previousLinkClassName={styles.linkPage}
                nextLinkClassName={styles.linkPage}
                forcePage={currentPage - 1}
              />
            )}
        </>
      )}
    </div>
  );
};

export default Home;
