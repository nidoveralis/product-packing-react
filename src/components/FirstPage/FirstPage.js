import React from 'react';
import './FirstPage.css';
import Header from "../Header/Header";
import Button from "../Button/Button";
import Keyboard from "../Keyboard/Keyboard";
import FooterMy from "../FooterMy/FooterMy";

function FirstPage() {
    return (
        <>
            <Header/>
            <section className="main-block">
                <Button buttonText="Есть проблема"/>
                <div className="main-text-container">
                    <h1 className="main__text">Сканируйте ячейку</h1>
                    <h1 className="main__text main__text_num">B-09</h1>
                </div>
                <Button buttonText="Сменить ячейку"/>
            </section>
            <Keyboard/>
            <FooterMy/>
        </>
    )
}

export default FirstPage;
