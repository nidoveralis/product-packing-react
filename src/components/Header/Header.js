import React from 'react';
import logoYandex from '../../images/logo-yandex.jpg';
import logoMarket from '../../images/logo-market.jpg';
import logoDefect from '../../images/icon_defect.svg';
import logoTable from '../../images/icon_changetab.svg';
import logoExit from '../../images/icon_exit.svg';
import logoCloseDrop from '../../images/icon_closedrop.svg';
import logoSendDrop from '../../images/icon_senddrop.svg';
import logoNone from '../../images/icon_none.svg';
import logoSetting from '../../images/icon_setting.svg';
import logoHelp from '../../images/icon_help.svg';
import './Header.css';

function Header(props) {

  const [openMenu, setOpenMenu] = React.useState(false);
  const closeBoxClass = `${!openMenu ? 'user-menu_hidden' : ''} user-menu`;
  const userInfoClass = `user__info ${props.userStatusTheme.name}`;

  function handelOpenMenu() {
    setOpenMenu(true);
    console.log("Я обовился")
  };

  function handelCloseMenu() {
    setOpenMenu(false);
  };

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

      <p className="header__title">Упаковка</p>

      <div className="user">
        <button className={userInfoClass}  onClick={props.handleOpenStatistic}>
          <p className="user__login">login</p>
          <div className="user__status conteiner" style={{background: `linear-gradient(to right, ${props.userStatusTheme.progressColor} ${props.scanInOneHour}%,#E8E8E8 ${props.scanInOneHour}%)`}} >
            <div className="user__logo" />
            <p className="user__text">79</p>
            <div className="user__text user-time">{`${props.minute}:${props.second}`}</div>
          </div>
        </button>
        <button className="user__setting" onClick={handelOpenMenu}></button>

        <div className={closeBoxClass}>
          <ul className="user-menu__list">
            <li className="user-menu__item">
              <img src={logoDefect} alt="Товар бракованный" className="user-menu__icon" />
              <p>Товар бракованный</p>
            </li>
            <li className="user-menu__item">
              <img src={logoNone} alt="Товара нет" className="user-menu__icon" />
              <p>Товара нет</p>
            </li>
            <li className="user-menu__item">
              <img src={logoTable} alt="Поменять стол" className="user-menu__icon" />
              <p>Поменять стол</p>
            </li>
            <li className="user-menu__item">
              <img src={logoSendDrop} alt="Отправить дропку" className="user-menu__icon" />
              <p>Отправить дропку</p>
            </li>
            <li className="user-menu__item">
              <img src={logoCloseDrop} alt="Закрыть дропку" className="user-menu__icon" />
              <p>Закрыть дропку</p>
            </li>
            <li className="user-menu__item">
              <img src={logoSetting} alt="Настройки" className="user-menu__icon" />
              <p>Настройки</p>
            </li>
            <li className="user-menu__item">
              <img src={logoHelp} alt="Помощь" className="user-menu__icon" />
              <p>Помощь</p>
            </li>
            <li className="user-menu__item" >
              <img src={logoExit} alt="Выйти" className="user-menu__icon" />
              <p>Выйти</p>
            </li>
          </ul>
          <button  className="user-menu__button" onClick={handelCloseMenu}>Закрыть</button>
        </div>

      </div>
    </header>
  )
}

export default Header;
