import React from 'react';
import './FirstPage.css';
import Header from "../Header/Header";
import Button from "../Button/Button";
import Keyboard from "../Keyboard/Keyboard";
import Footer from "../Footer/Footer";
import ModalWindow from "../ModalWindow/ModalWindow";
import Statistic from '../Statistic/Statistic';

function FirstPage(props) {
    return (
        <>
            <Header
                handleOpenStatistic={props.handleOpenStatistic}
                scanCount={props.scanCount}
                userStatusTheme={props.userStatusTheme}
                scanInOneHour={props.scanInOneHour}
                second={props.second}
                minute={props.minute}
          />
            <section className="main-block">
                <Button buttonText="Есть проблема"/>
                <div className="main-text-container">
                    <h1 className="main__text">Сканируйте ячейку</h1>
                    <h1 className="main__text main__text_num">B-09</h1>
                </div>
                <Button buttonText="Сменить ячейку"/>
            </section>
            <Keyboard/>
            <Footer/>
            <Statistic openStatictic={props.openStatictic} handleOpenStatistic={props.handleOpenStatistic} statisticsShift={props.statisticsShift} staticsOperation={props.staticsOperation} scanInOneHour={props.scanInOneHour} second={props.second} minute={props.minute} />
        </>
    )
}

export default FirstPage;
