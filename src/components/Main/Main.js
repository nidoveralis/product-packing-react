import Header from "../Header/Header";
import Products from "../Products/Products";
import Button from "../Button/Button";
import Keyboard from "../Keyboard/Keyboard";
import Footer from "../Footer/Footer";
import editIcon from "../../images/icon__edit.svg";

function Main(props){
  return(
    <>
        <Header />
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
    </>
  )
};

export default Main;
