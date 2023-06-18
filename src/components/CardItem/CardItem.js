import React from 'react';
import Icon from '../../images/icon_brand.svg';
import IconCancel from '../../images/icon_cancel.svg';

function CardItem({item, handleScanProduct, hiddenProducts}) {

  const [scan,setScan]= React.useState(false);

  const tagCardClass = `card__tag ${item.tag ? "card__tag_active" : ""}`;
  const brandCardClass = `card__tag ${item.brand ? "card__brand" : ""}`;
  const cancelCardClass = `card__tag ${item.cancel ? "card__cancel" : ""}`;
  const numberardClass = `card__number ${item.cancel ? "cansel-text" : ""}`;
  const scanCardClass = `card__count conteiner ${scan ? "card__count_active" : ""}`;
  const hiddenProductsClass = `card__conteiner ${hiddenProducts ? "conteiner_hidden" : ""} ${item.cancel && "cansel-text"}`;

  function handleClickProduct() {
    setScan(true)
    handleScanProduct(item);
  };

  return(
    <div className={hiddenProductsClass} >
        <div className="card__info">
          {item.count===1 && <div className="card__img" style={{backgroundImage: `url(${item.img})`}} />}
          <p className="card__description">{item.description}</p>
          <button className={brandCardClass}>
            <img src={Icon} alt='Иконка штрихкода' className="card__icon" />
            <p>Нужно сканировать марку</p>
            </button>
          <div className={cancelCardClass}>
            <img src={IconCancel} alt='Иконка отмены' className="card__icon" />
            <p>Товар отменён</p>
          </div>
          <p className={tagCardClass} style={{gridRow:`${item.brand && '3/4'}`, marginTop:`${item.brand && '10px'}`}} >{item.tag}</p>
        </div>
        <div className={scanCardClass} >1 шт.</div> 
        <button className={numberardClass} onClick={handleClickProduct} disabled={scan || item.cancel} >{item.barcode}</button>
      </div> 
  )
};

export default CardItem;