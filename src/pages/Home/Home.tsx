import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import Title from "../../components/Title";
import Tabs from "../../components/Tabs";
import CardsList from "../../components/CardsList";
import { TabsNames } from "../../components/Tabs/type";
import SelectedPostModal from "./SelectedPostModal";
import {getAllPosts, PostSelectors} from "../../redux/reducers/postSlice";
import { useThemeContext } from "../../context/Theme/Context";

const TABS_LIST = [
  {
    title: "All",
    disabled: false,
    key: TabsNames.All,
  },
  {
    title: "My favorites",
    disabled: false,
    key: TabsNames.Favorites,
  },
  {
    title: "Popular",
    disabled: false,
    key: TabsNames.Popular,
  },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState(TabsNames.All);
  const onTabClick = (key: TabsNames) => setActiveTab(key);
  const dispatch = useDispatch()
  const postsList = useSelector(PostSelectors.getAllPosts);
  const { theme } = useThemeContext();

  
    useEffect(() => {
        dispatch(getAllPosts());
    }, []);

  return (
    <div>
      <Title title={"Blog"} />
      <Tabs tabsList={TABS_LIST} activeTab={activeTab} onClick={onTabClick} />
      <CardsList cardsList={postsList} />
      <SelectedPostModal />
    </div>
  );
};

export default Home;
