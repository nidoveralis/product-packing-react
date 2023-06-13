import React from 'react';
import './Card.css';


function Card({item, onScanCard, }) {

  const [hiddenProducts,setHiddenProducts]= React.useState(true);
  const [itemScan,setItemScan]= React.useState(true);

  const tagCardClass = `card__tag ${item.tag ? "card__tag_active" : ""}`;
  const countContent = item.scan===0 ? `${item.count} шт.` : `${item.scan} из ${item.count} шт.`;
  const countCardClass = `card__count conteiner ${item.full ? "card__count_active" : ""}`;
  const progressCardClass = `progress-bar__subtitle ${item.full ? "progress-bar__subtitle_active" : ""}`;

  const hiddenProductsClass = `card__conteiner ${hiddenProducts ? "card__conteiner_hidden" : ""}`;
  const progressColor = `${Math.floor((100 / item.count) * item.scan)}%`;  
  
  function handleScanProduct() {
    onScanCard(item);
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
        {item.count>1 ? 
            <div className="progress-bar">
            <div className="progress-bar__conteiner conteiner">
              <div className="progress-bar__fill conteiner" style={{width: progressColor, opacity: progressColor }}></div>
            </div>
            <p className={progressCardClass}>{countContent}</p>
            </div>
        : <div className={countCardClass} >1 шт.</div> }
        {item.count>1 ? <button className="card__number card__button-more" onClick={openHiddenProducts}>Развернуть</button> : <button className="card__number"  onClick={handleScanProduct} >{item.barcode[0]}</button> }
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