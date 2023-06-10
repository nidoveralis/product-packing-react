import imgSucces from '../../images/img_succes.jpg';
import './Success.css'

function Success() {
  return(
    <div className="success">
      <img src={imgSucces} alt="Логотип Яндекс" className="success__img" />
      <h3 className="success__title">Отличная работа!</h3>
      <p className="success__subtitle">Упакуйте товары и поставьте коробку на конвейер</p>
    </div>
  )
}

export default Success;