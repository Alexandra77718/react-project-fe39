import React, {useState} from "react";
import './App.module.scss';
import Button from './components/Button';
import { ButtonType } from './components/Button/Button';
import UserName from './components/UserName';
import Title from './components/Title';
import Tabs from "./components/Tabs";
import BurgerButton from "./components/BurgerButton";
import { CloseIcon, OpenedMenu } from "./assets/icons";



const App = () => {
    const [username, setUsername] = useState('');
    const onChange = (value: string) => {
        setUsername(value);
    }


    return (
        <div className='App'>
            <input onChange={(event) => onChange(event.target.value)} />
            <Button title={'Primary'} type={ButtonType.Primary} onClick={() => { }} />
            <Button title={'Secondary'} type={ButtonType.Secondary} onClick={() => { }} />
            <Button title={'Error'} type={ButtonType.Error} onClick={() => { }} />
            {/* <UserName username={username} /> username, onChange, value не подходит почему? */}
            <UserName username="Artem Malkin" />
            <Title title={'Blog'} />
            <Tabs />
            <BurgerButton />

            
        </div>
        
    );
}

export default App;
