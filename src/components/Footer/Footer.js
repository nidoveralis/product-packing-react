import './Footer.css';

function Footer() {
  return(
    <footer className="footer">
    <div className="footer__buttons">
      <button className="footer-button button-keyboard">
        <div className="footer-button__icon footer-button__icon_keyboard"></div>
        <p className="footer-button__text">Ввести с клавиатуры</p>
      </button>
      <button className="footer-button button-edit">
        <div className="footer-button__icon footer-button__icon_edit"></div>
        <p className="footer-button__text">Изменить состав</p>
      </button>
    </div>
    <div className="footer__copyright">
      <p className="footer__text footer__text_left">Коммерческая тайна ООО «Яндекс», 119021, Россия, г. Москва, ул. Льва Толстого, д. 16</p>
      <p className="footer__text footer__text_center">2022.11.1  / 2023.1.68</p>
      <p className="footer__text footer__text_right">&copy; 2003–2023 ООО «Яндекс»</p>
    </div>
  </footer>
  )

}

export default Footer;