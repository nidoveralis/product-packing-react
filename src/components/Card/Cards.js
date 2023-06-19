import React from 'react';
import './Card.css';
import CardItem from '../CardItem/CardItem';

function Card({item, onScanCard,checkStatus }) {

  const [hiddenProducts,setHiddenProducts]= React.useState(item.amount===1 ? false : true);

  const countContent = item.scan===0 ? `${item.amount} шт.` : `${item.scan} из ${item.amount} шт.`;
  const progressCardClass = `progress-bar__subtitle ${checkStatus.full ? "progress-bar__subtitle_active" : ""}`;
  const progressColor = `${Math.floor((100 / item.amount) * item.scan)}%`;
  const progressGradient = `linear-gradient(to right, #2AAD2E ${progressColor},#E8E8E8 ${progressColor})`
  const hiddenProductsClass = `card__conteiner ${item.amount==1 ? "conteiner_hidden" : ""}`;
  const numberImgClass = `card__number-img ${!hiddenProducts ? "card__number-img_active" : ""}  ${item.cancel && "cansel-text"}`;
  const hiddenProductsList = `card__conteiner ${hiddenProducts ? "conteiner_hidden" : ""} ${item.cancel && "cansel-text"}`;

  function openHiddenProducts() {
    setHiddenProducts(!hiddenProducts);
  };

  function handleScanProduct() {
    onScanCard(item);
  };

  return (
      <li className={`card`} >

      <CardItem 
        item={item} 
        handleScanProduct={handleScanProduct} 
        hiddenProducts={hiddenProducts}
        hiddenProductsClass={hiddenProductsClass}
        childImg={
          <div className="card__img" style={{backgroundImage: `url(${item.img})`}} />
        }
        childCount={
          <div className="progress-bar">
          {item.scan>0 ? <div className="progress-bar__conteiner conteiner" style={{background: progressGradient, opacity: progressColor}} /> : <div className="progress-bar__cont conteiner" /> }
          <p className={progressCardClass}>{countContent}</p>
        </div>}

        childNumber={
          <button className="card__number" onClick={openHiddenProducts}  disabled={item.cancel}>
            <p className="card__number-text" >{hiddenProducts ? "Развернуть" : "Свернуть"}</p>
            <div className={numberImgClass} ></div>
          </button>
        }
        checkStatus={checkStatus}
      />
        { [...Array(item.amount)].map((el, index) => <CardItem 
        key={index} 
        item={item} 
        handleScanProduct={handleScanProduct} 
        hiddenProducts={hiddenProducts}
        hiddenProductsClass={hiddenProductsList}
        childImg={
          item.amount===1 && <div className="card__img" style={{backgroundImage: `url(${item.img})`}} />
        }
        checkStatus={checkStatus}
        /> ) }
      </li>
  )
}

export default Card;
