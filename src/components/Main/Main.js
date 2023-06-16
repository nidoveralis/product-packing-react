import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Statistic from '../Statistic/Statistic';

function Main(props){

   

  return(
    <>
        <Header  handleOpenStatistic={props.handleOpenStatistic} />
        <main className="content">
          <button className="content__button have-problem">Есть проблема</button>
          <Products cards={props.cards} onScanCard={props.onScanCard} />
            <button className="content__button close-box">Закрыть коробку</button>
        </main>
        <Footer />
        <Statistic openStatictic={props.openStatictic} handleOpenStatistic={props.handleOpenStatistic} statisticsShift={props.statisticsShift} staticsOperation={props.staticsOperation} />
        
    </>
  )
};

export default Main;

//        {props.openStatictic && <Statistic openStatictic={props.openStatictic} handleOpenStatistic={props.handleOpenStatistic} />}
