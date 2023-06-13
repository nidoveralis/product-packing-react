import Header from "../Header/Header";
import Products from "../Products/Products";
import Button from "../Button/Button";
import Keyboard from "../Keyboard/Keyboard";
import FooterMy from "../FooterMy/FooterMy";

function Main(props){
  return(
    <>
        <Header />
        <main className="content">
          <Button buttonText="Есть проблема"/>
          <Products cards={props.cards} onScanCard={props.onScanCard} />
          <Button buttonText="Закрыть коробку"/>
        </main>
        <Keyboard/>
        <FooterMy/>
    </>
  )
};

export default Main;
