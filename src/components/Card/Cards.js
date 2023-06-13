import React from 'react';
import './Card.css';


function Card({item, onScanCard, }) {

  const [hiddenProducts,setHiddenProducts]= React.useState(true);

  const tagCardClass = `card__tag ${item.tag ? "card__tag_active" : ""}`;
  const countContent = item.scan===0 ? `${item.count} шт.` : `${item.scan} из ${item.count} шт.`;
  const progressCardClass = `progress-bar__subtitle ${item.full ? "progress-bar__subtitle_active" : ""}`;

  const hiddenProductsClass = `card__conteiner ${hiddenProducts ? "card__conteiner_hidden" : ""}`;
  const progressColor = `${Math.floor((100 / item.count) * item.scan)}%`;  
  
  function handleScanProduct(index) {
    //console.log(index)
    onScanCard(item,index);
  };

  function openHiddenProducts() {
    setHiddenProducts(!hiddenProducts);
  };

  return (
    <li className="card" >

      {item.count>1 && <div className="card__conteiner">
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
      </div>   }

      {item.barcode.map((el,index)=>
        <div className={item.count>1 ? hiddenProductsClass : "card__conteiner"} key={el.code}>
        <div className="card__info">
          {item.count===1 && <div className="card__img" style={{backgroundImage: `url(${item.img})`}} />}
          <p className="card__description">{item.description}</p>
          <p className={tagCardClass}>{item.tag}</p>
        </div>
        <div className={`card__count conteiner ${el.scan ? "card__count_active" : ""}`} >1 шт.</div> 
        <button className='card__number' onClick={()=>handleScanProduct(index)} disabled={el.scan} >{el.code}</button>
      </div> 
      )}
      

    </li>
  )
}

export default Card;