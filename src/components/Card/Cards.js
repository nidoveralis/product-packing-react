import React from 'react';
import './Card.css';


function Card({item, onScanCard}) {
//width/count*scan
//style{{backgroundColor 0 - 25 -100%}}
// background: linear-gradient(to left,  rgba(243, 240, 233, 0.5) `${Math.floor(item.scan*100/item.count)}%`, rgba(42, 173, 46, 0.25) `${Math.floor(100 - (item.scan*100/item.count))}%`);
  const [cardNumber, setCardNumber] = React.useState(item.count>1 ? "Развернуть" : item.barcode)

  const tagCardClass = `card__tag ${item.tag ? "card__tag_active" : ""}`;
  const countContent = item.count===1 || item.scan===0 ? `${item.count} шт.` : `${item.scan} из ${item.count} шт.`;
  const countCardClass = `card__count conteiner ${item.full ? "card__count_active" : ""}`;///////card__count_no-one 
  const numberCardClass = `card__number ${item.count>1 ? "card__button-more" : ""}`;


  function handleScanProduct() {
    
    onScanCard(item)
  };

  return (
    <li className="card" >
      <div className="card__info">
        <div className="card__img" style={{backgroundImage: `url(${item.img})`}} />
        <p className="card__description">{item.description}</p>
        <p className={tagCardClass}>{item.tag}</p>
      </div>
      <div className={countCardClass} style={item.full ? {backgroundColor:'#2AAD2E'} : { background: `linear-gradient(to left, rgba(243, 240, 233, 0.5) ${Math.floor(100 - (item.scan*100/item.count))}%, rgba(42, 173, 46, 0.25) ${Math.floor(item.scan*100/item.count)}%)`}} >{countContent}</div>
      <button className={numberCardClass} onClick={handleScanProduct} >{cardNumber}</button>              
      </li>
  )
}

export default Card;