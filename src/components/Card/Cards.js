import React from 'react';
import './Card.css';


function Card({item, onScanCard}) {
//width/count*scan
//style{{backgroundColor 0 - 25 -100%}}
// background: linear-gradient(to left,  rgba(243, 240, 233, 0.5) `${Math.floor(item.scan*100/item.count)}%`, rgba(42, 173, 46, 0.25) `${Math.floor(100 - (item.scan*100/item.count))}%`);
  const [hiddenProducts,setHiddenProducts]= React.useState(true);
  const [valueScan,setValueScan]= React.useState(0);

  const tagCardClass = `card__tag ${item.tag ? "card__tag_active" : ""}`;
  const countContent = item.scan===0 ? `${item.count} шт.` : `${item.scan} из ${item.count} шт.`;
  const countCardClass = `card__count conteiner ${item.full ? "card__count_active" : ""}`;///////card__count_no-one 
  const hiddenProductsClass = `card__conteiner ${hiddenProducts ? "card__conteiner_hidden" : ""}`;
  
  
  function handleScanProduct() {
    onScanCard(item)
  };

  function openHiddenProducts() {
    setHiddenProducts(!hiddenProducts);
  };

  

  return (
    <li className="card" >
      <div className="card__conteiner">
        <div className="card__info">
          <div className="card__img" style={{backgroundImage: `url(${item.img})`}} />
          <p className="card__description">{item.description}</p>
          <p className={tagCardClass}>{item.tag}</p>
        </div>
        {item.count>1 ?  <progress className={countCardClass}  onClick={handleScanProduct} >{item.barcode[0]}</progress> : <div className={countCardClass} >1 шт.</div>}
        {item.count>1 ? <button className="card__number card__button-more" onClick={openHiddenProducts} >Развернуть</button> : <button className="card__number"  onClick={handleScanProduct} >{item.barcode[0]}</button> }
      </div>   
      {item.barcode.map((el)=>
      <div className={hiddenProductsClass} key={el}>
      <div className="card__info">
        <p className="card__description">{item.description}</p>
        <p className={tagCardClass}>{item.tag}</p>
      </div>
      <div className={countCardClass} >1 шт.</div> 
      <button className='card__number' onClick={handleScanProduct} >{el}</button>
    </div> 
      )}       
    </li>
  )
}

export default Card;