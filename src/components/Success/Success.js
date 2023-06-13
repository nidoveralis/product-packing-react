import imgSuccess from '../../images/img_succes.jpg';
import './Success.css'
import Header from "../Header/Header";
import FooterMy from "../FooterMy/FooterMy";

function Success() {
    return (
        <>
            <Header/>
            <div className="success">
                <img src={imgSuccess} alt="Логотип Яндекс" className="success__img"/>
                <h3 className="success__title">Отличная работа!</h3>
                <p className="success__subtitle">Упакуйте товары и поставьте коробку на конвейер</p>
            </div>
            <FooterMy/>
        </>
  )
}

export default Success;
