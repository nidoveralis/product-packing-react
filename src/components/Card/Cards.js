import React from 'react';
import './Card.css';
import CardItem from '../App/CardItem/CardItem';


function Card({item, onScanCard, className }) {

  const [hiddenProducts,setHiddenProducts]= React.useState(item.count===1 ? false : true);

  const tagCardClass = `card__tag ${item.tag ? "card__tag_active" : ""}`;
  const countContent = item.scan===0 ? `${item.count} шт.` : `${item.scan} из ${item.count} шт.`;
  const progressCardClass = `progress-bar__subtitle ${item.full ? "progress-bar__subtitle_active" : ""}`;
  const progressColor = `${Math.floor((100 / item.count) * item.scan)}%`;
  const hiddenProductsClass = `card__conteiner ${item.count===1 ? "card__conteiner_hidden" : ""}`;

  function openHiddenProducts() {
    setHiddenProducts(!hiddenProducts);
  };

  function handleScanProduct() {
    onScanCard(item);
  };

  return (
      <li className={`card ${className}`} >
        <div className={hiddenProductsClass}>
          <div className="card__info">
            <div className="card__img" style={{backgroundImage: `url(${item.img})`}} />
            <p className="card__description">{item.description}</p>
            <p className={tagCardClass}>{item.tag}</p>
          </div>
          <div className="progress-bar">
            <div className="progress-bar__conteiner conteiner">
              <div className="progress-bar__fill conteiner" style={{width: progressColor, opacity: progressColor }}></div>
            </div>
            <p className={progressCardClass}>{countContent}</p>
          </div>
          <button className="card__number card__button-more" onClick={openHiddenProducts}>Развернуть</button>
        </div>
        { [...Array(item.count)].map((el, index) => <CardItem key={index} item={item} handleScanProduct={handleScanProduct} hiddenProducts={hiddenProducts}/> ) }
      </li>
  )
}

export default Card;
