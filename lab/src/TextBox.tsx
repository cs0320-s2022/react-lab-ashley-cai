import React, {ChangeEvent, ChangeEventHandler} from 'react';
import logo from './logo.svg';
import './App.css';

interface TextBoxProps {
    label: string,
    change: Function
}

function TextBox({change, label} : TextBoxProps) {

    const changeValue: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => change(e.target.value);

    return (
        <div>
            <p>{label}</p>
            <input className={label} type={"text"} onChange={changeValue}></input>
        </div>
    );
}

export default TextBox;
