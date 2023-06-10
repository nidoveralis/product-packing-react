import logoYandex from '../../images/logo-yandex.jpg';
import logoMarket from '../../images/logo-market.jpg';
import './Header.css';

function Header() {
  return(
    <header className="header">
      <div className="header-menu">
        <div className="navbar-menu__burger">
          <span className="navbar-menu__item"></span>
        </div>
        <div className="header-logo">
          <img src={logoYandex} alt="Логотип Яндекс" className="header-logo__img" />
          <img src={logoMarket} alt="Логотип Яндекс Маркет" className="header-logo__img" />
          <p className="header-logo__title">Склад</p>
        </div>
      </div>

      <h3 className="header__title">Упаковка</h3>
      
      <div className="user-menu">
        <div className="user-menu__info">
          <p className="user-menu__login">sof-natgemokee</p>
          <div className="user-menu__status conteiner">
            <div className="user-menu__logo"></div>
            <p className="user-menu__text">79%</p>
          </div>
        </div>
        <button className="user-menu__setting"></button>
      </div>
    </header>
  )
}

export default Header;