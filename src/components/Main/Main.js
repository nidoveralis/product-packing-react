import Header from "../Header/Header";
import Products from "../Products/Products";
import Button from "../Button/Button";
import Keyboard from "../Keyboard/Keyboard";
import Footer from "../Footer/Footer";
import Statistic from '../Statistic/Statistic';
import editIcon from "../../images/icon__edit.svg";

function Main(props){

  const buttonClass = props.visible ? '' :'hidden'

  return(
    <>
        <Header
          handleOpenStatistic={props.handleOpenStatistic}
          scanCount={props.scanCount}
          userStatusTheme={props.userStatusTheme}
          scanInOneHour={props.scanInOneHour}
          second={props.second}
          minute={props.minute}
          />
        <main className="content">
          <Button buttonText="Есть проблема"/>
          <Products cards={props.cards} onScanCard={props.onScanCard} packageType={props.packageType} visible={props.visible} checkStatus={props.checkStatus} />
          <Button buttonText="Закрыть коробку" buttonClass={buttonClass} onClick={props.closeBox} />
        </main>
        <Keyboard>
            <div className="edit__container">
                <img className="edit__icon" src={editIcon} alt="Иконка изменить состав"/>
                <p className="edit__text">Изменить состав</p>
            </div>
        </Keyboard>
        <Footer/>
        <Statistic openStatictic={props.openStatictic} handleOpenStatistic={props.handleOpenStatistic} statisticsShift={props.statisticsShift} staticsOperation={props.staticsOperation} scanInOneHour={props.scanInOneHour} second={props.second} minute={props.minute} />
    </>
  )
};

export default Main;
