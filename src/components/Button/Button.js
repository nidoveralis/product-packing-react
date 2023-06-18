import React from 'react';
import './Button.css';

function Button(props) {
    return (
        <button className={`button ${props.buttonClass}`}>
            <h2 className="button__text">{props.buttonText}</h2>
        </button>
    )
}

export default Button;
