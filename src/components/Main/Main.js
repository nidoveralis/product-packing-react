import Header from "../Header/Header";
import Products from "../Products/Products";
import Button from "../Button/Button";
import Keyboard from "../Keyboard/Keyboard";
import Footer from "../Footer/Footer";
import Statistic from '../Statistic/Statistic';
import editIcon from "../../images/icon__edit.svg";

function Main(props){
  return(
    <>
        <Header  handleOpenStatistic={props.handleOpenStatistic} />
        <main className="content">
          <Button buttonText="Есть проблема"/>
          <Products cards={props.cards} onScanCard={props.onScanCard} />
          <Button buttonText="Закрыть коробку"/>
        </main>
        <Keyboard>
            <div className="edit__container">
                <img className="edit__icon" src={editIcon} alt="Иконка изменить состав"/>
                <p className="edit__text">Изменить состав</p>
            </div>
        </Keyboard>
        <Footer/>
        <Statistic openStatictic={props.openStatictic} handleOpenStatistic={props.handleOpenStatistic} />
    </>
  )
};

export default Main;


//        {props.openStatictic && <Statistic openStatictic={props.openStatictic} handleOpenStatistic={props.handleOpenStatistic} />}
