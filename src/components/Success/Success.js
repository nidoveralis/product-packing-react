import imgSuccess from '../../images/img_succes.jpg';
import './Success.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Button from "../Button/Button";
import React from "react";

function Success(props) {
    return (
        <>
            <Header
                handleOpenStatistic={props.handleOpenStatistic}
                scanCount={props.scanCount}
                userStatusTheme={props.userStatusTheme}
                scanInOneHour={props.scanInOneHour}
            />
            <div className="success">
                <Button buttonText="Есть проблема"/>
                <div className="success-img-container">
                    <img src={imgSuccess} alt="Логотип Яндекс" className="success__img"/>
                    <h3 className="success__title">Отличная работа!</h3>
                    <p className="success__subtitle">Упакуйте товары и поставьте коробку на конвейер</p>
                </div>
                <Button buttonText="Готово" buttonClass="button_active"/>
            </div>
            <Footer/>
        </>
  )
}

export default Success;
