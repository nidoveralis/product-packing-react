import React from 'react';
import './Keyboard.css';
import iconKeyboard from "../../images/icon__keyboard.svg";

function Keyboard(props) {
    return (
        <button className={`keyboard-button ${props.className}`}>
            {props.button}
            <div className="text-container">
                <img className="keyboard-button-text__icon" src={iconKeyboard} alt="Иконка клавиатуры"/>
                <h2 className="keyboard-button__text">Ввести с клавиатуры</h2>
            </div>
            {props.children}
        </button>
    )
}

export default Keyboard;
