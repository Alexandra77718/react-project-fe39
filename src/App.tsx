import React, {useState} from "react";
import './App.module.scss';
import Button from './components/Button';
import { ButtonType } from './components/Button/Button';
import UserName from './components/UserName';
import Title from './components/Title';
import Tabs from "./components/Tabs";
import BurgerButton from "./components/BurgerButton";
import { CloseIcon, OpenedMenu } from "./assets/icons";
import Input from "./components/Input";
import { queryByTitle } from "@testing-library/react";
import { title } from "process";
import { Value } from "sass";



const App = () => {
    const [username, setUsername] = useState('');
    const onChange = (value: string) => {
        setUsername(value);
    }
    const [text, setText] = useState('');
    const onChangeText = (value: string) => {
        setText(value)
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
            <Input value={text} onChange={onChange} title="Title" placeholder="Placeholder" errorText ={"Error text"} />
            {/* <Input value={value} onChange={onChange} title={title} placeholder={placeholder}  /> - почему не получилось вот так? */}
            {/* <Input value={text} onChange={onChange} title="Title" placeholder="Placeholder"/> хотела сдлать не error style, где input вообще? */}

            
        </div>
        
    );
}

export default App;
