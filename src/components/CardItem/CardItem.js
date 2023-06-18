import React from 'react';

function CardItem({item, handleScanProduct, hiddenProducts}) {

  const [scan,setScan]= React.useState(false);

  const tagCardClass = `card__tag ${item.tag ? "card__tag_active" : ""}`;
  const scanCardClass = `card__count conteiner ${scan ? "card__count_active" : ""}`;
  const hiddenProductsClass = `card__conteiner ${hiddenProducts ? "card__conteiner_hidden" : ""}`;

  function handleClickProduct() {
    setScan(true)
    handleScanProduct(item);
  };

  return(
    <div className={hiddenProductsClass} >
        <div className="card__info">
          {item.count===1 && <div className="card__img" style={{backgroundImage: `url(${item.img})`}} />}
          <p className="card__description">{item.description}</p>
          <p className={tagCardClass}>{item.tag}</p>
        </div>
        <div className={scanCardClass} >1 шт.</div> 
        <button className='card__number' onClick={handleClickProduct} disabled={scan} >{item.barcode}</button>
      </div> 
  )
};

export default CardItem;