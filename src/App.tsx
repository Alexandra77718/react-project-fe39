import React, { useState} from "react";
import ThemeProvider from './context/Theme/Provider';
import {Theme} from "./context/Theme/Context";
import Router  from './pages/Router';
import classNames from "classnames";
import styles from './App.module.scss';


const App = () => {
    const [theme, setTheme] = useState(Theme.Dark)

    const onChangeTheme = (value: Theme) => {
        setTheme(value)
    }

    return (
        <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
            <div className={styles.container}>
           <Router />
            </div>
        </ThemeProvider>
    );
}

export default App;
