import React from 'react';
import "./ModalWindow.css";
import Card from "../Card/Cards";
import img3 from "../../images/img3.png";
import closeIcon from "../../images/icon_closedrop.svg";
import iconImportant from "../../images/icon__important.svg";

function ModalWindow(props) {
    const item = {
        _id: 0,
        description:'Умная колонка Яндекс Станция Лайт, ультрафиолет',
        count:1,
        img: img3,
        tag: 'Пузырчатая плёнка',
        barcode: ['9234 5678 234 32'],
        scan: 0,
        full: false
    }

    return(
        <div className="popup-background">
            <section className="popup">
                <div className="popup__close-button">
                    <img className="close-icon" src={closeIcon} alt="иконка закрытия"/>
                </div>
                <div className="popup__info-container">
                    <img className="popup__important-icon" src={iconImportant} alt="Иконка важное"/>
                    <h1 className="popup__text">{props.text}</h1>
                </div>
                <Card item={item} className="card-button-border"/>
            </section>
        </div>
    )
}

export default ModalWindow;
