import React, {useState} from "react";
import './App.css'
import './App.module.scss';
import Button from './components/Button';
import { ButtonType } from './components/Button/Button';
import UserName from "./components/UserName";

import Tabs from "./components/Tabs";
// import { CloseIcon, OpenedMenu } from "./assets/icons";



const App = () => {
    return (
        <div className='App'>
            <Button title={'Primary'} type={ButtonType.Primary} onClick={() =>{}} />
            <Button title={'Secondary'} type={ButtonType.Secondary} onClick={() => {}} />
            <Button title={'Error'} type={ButtonType.Error} onClick={() => { }} />
            <UserName username={"Artem Malkin"} />
            <Tabs />  
        </div>
        
    )
}

export default App;
