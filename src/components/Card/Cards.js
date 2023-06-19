import React from 'react';
import './Card.css';
import CardItem from '../CardItem/CardItem';
import Icon from '../../images/icon_brand.svg';

function Card({item, onScanCard }) {

  const [hiddenProducts,setHiddenProducts]= React.useState(item.count===1 ? false : true);

  const tagCardClass = `card__tag ${item.tag ? "card__tag_active" : ""}`;
  const brandCardClass = `card__tag ${item.brand ? "card__tag_active" : ""}`;
  const countContent = item.scan===0 ? `${item.count} шт.` : `${item.scan} из ${item.count} шт.`;
  const progressCardClass = `progress-bar__subtitle ${item.full ? "progress-bar__subtitle_active" : ""}`;
  const progressColor = `${Math.floor((100 / item.count) * item.scan)}%`;
  const progressGradient = `linear-gradient(to right, #2AAD2E ${progressColor},#E8E8E8 ${progressColor})`
  const hiddenProductsClass = `card__conteiner ${item.count===1 ? "conteiner_hidden" : ""}`;
  const numberImgClass = `card__number-img ${!hiddenProducts ? "card__number-img_active" : ""}  ${item.cancel && "cansel-text"}`;

  function openHiddenProducts() {
    setHiddenProducts(!hiddenProducts);
  };

  function handleScanProduct() {
    onScanCard(item);
  };


  return (
      <li className={`card`} >
        <div className={hiddenProductsClass}>
          <div className="card__info">
            <div className="card__img" style={{backgroundImage: `url(${item.img})`}} />
            <p className="card__description">{item.description}</p>
            <button className={brandCardClass}>
            <img src={Icon} alt='Иконка штрихкода' className="card__icon" />
            <p>Нужно сканировать марку</p>
            </button>            
            <p className={tagCardClass}>{item.tag}</p>
          </div>
          <div className="progress-bar">
            {item.scan>0 ? <div className="progress-bar__conteiner conteiner" style={{background: progressGradient, opacity: progressColor}} /> : <div className="progress-bar__cont conteiner" /> }
            <p className={progressCardClass}>{countContent}</p>
          </div>
          <button className="card__number" onClick={openHiddenProducts}  disabled={item.cancel}>
            <p className="card__number-text" >{hiddenProducts ? "Развернуть" : "Свернуть"}</p>
            <div className={numberImgClass} ></div>
            </button>
        </div>
        { [...Array(item.count)].map((el, index) => <CardItem key={index} item={item} handleScanProduct={handleScanProduct} hiddenProducts={hiddenProducts}/> ) }
      </li>
  )
}

export default Card;
