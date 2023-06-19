import React from 'react';
import "./PackingPage.css";
import Header from "../Header/Header";
import Keyboard from "../Keyboard/Keyboard";
import Footer from "../Footer/Footer";
import Button from "../Button/Button";
import iconBox from "../../images/icon__box.svg";
import {Link} from "react-router-dom";
import { THEME_PACKAGE } from '../../utils/constants';

function PackingPage(props) {

    function handelClickBox() {
        props.selectBox(props.type)
    }
    return (
        <>
            <Header
                handleOpenStatistic={props.handleOpenStatistic}
                scanCount={props.scanCount}
                userStatusTheme={props.userStatusTheme}
                scanInOneHour={props.scanInOneHour}
            />
            <section className="packing-block">
                <Button buttonText="Есть проблема"/>
                <div className="packing-container">
                    <img className="packing__image" src={iconBox} alt="картинка коробки"/>
                    <h1 className="packing__text">Упакуйте товары и&nbsp;сканируйте коробку <span className="packing-type" style={{backgroundColor:THEME_PACKAGE[props.type].color}} onClick={handelClickBox} >{props.type}</span></h1>
                </div>
            </section>
            <Keyboard button={<Link to="/main" className="button__back">Назад</Link>} className="keyboard-button-back"/>
            <Footer/>
        </>
    )
}

export default PackingPage;
