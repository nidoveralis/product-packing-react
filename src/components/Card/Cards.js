import React from 'react';
import './Card.css';


function Card({item, onScanCard}) {

  const [cardNumber, setCardNumber] = React.useState(item.count>1 ? "Развернуть" : item.barcode)

  const tagCardClass = `card__tag ${item.tag ? "card__tag_active" : ""}`;
  const countCardClass = `card__count conteiner ${item.scan ? "card__count_active" : ""}`;///////card__count_no-one 
  const numberCardClass = `card__number ${item.count>1 ? "card__button-more" : ""}`;


  function handleScanProduct() {
    
    onScanCard(item)
  };
  console.log(item.scan)
  return (
    <div className="card" >
      <div className="card__info">
        <div className="card__img" style={{backgroundImage: `url(${item.img})`}} />
        <p className="card__description">{item.description}</p>
        <button className={tagCardClass}>{item.tag}</button>
      </div>
      <button className={countCardClass} onClick={handleScanProduct} >{`${item.count} шт.`}</button>
      <button className={numberCardClass}>{cardNumber}</button>              
      </div>
  )
}

export default Card;