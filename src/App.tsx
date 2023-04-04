import React, { useState} from "react";
import { Provider } from "react-redux";

import styles from './App.module.scss';
import Home from './pages/Home';
import ThemeProvider from './context/Theme/Provider';
import {Theme} from "./context/Theme/Context";
import { Router } from "react-router-dom";
import store from "./redux/store";



const App = () => {
    const [theme, setTheme] = useState(Theme.Dark)

    const onChangeTheme = (value: Theme) => {
        setTheme(value)
    }

    return (
        <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
            <div className={styles.container}>
           <Home />
            </div>
        </ThemeProvider>
    );
}

export default App;
