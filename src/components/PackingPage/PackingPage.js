import React from 'react';
import "./PackingPage.css";
import Header from "../Header/Header";
import Keyboard from "../Keyboard/Keyboard";
import Footer from "../Footer/Footer";
import Button from "../Button/Button";
import iconBox from "../../images/icon__box.svg";

function PackingPage(props) {
    return (
        <>
            <Header/>
            <section className="packing-block">
                <Button buttonText="Есть проблема"/>
                <div className="packing-container">
                    <img className="packing__image" src={iconBox} alt="картинка коробки"/>
                    <h1 className="packing__text">Упакуйте товары и&nbsp;сканируйте коробку <span className="packing-type">{props.type}</span></h1>
                </div>
            </section>
            <Keyboard button={<button className="button__back">Назад</button>}/>
            <Footer/>
        </>
    )
}

export default PackingPage;
