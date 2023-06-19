import React from 'react';
import Icon from '../../images/icon_brand.svg';
import IconCancel from '../../images/icon_cancel.svg';

function CardItem({item, handleScanProduct, hiddenProductsClass, childImg, childCount, childNumber, checkStatus}) {

  const [scan,setScan]= React.useState(false);

  const tagCardClass = `card__tag ${item.repackaging ? "card__tag_active" : ""}`;
  const brandCardClass = `card__tag ${item.brand ? "card__brand" : ""}`;
  const cancelCardClass = `card__tag ${item.cancel ? "card__cancel" : ""}`;
  const numberCardClass = `card__number ${item.cancel ? "cansel-text" : ""}`;
  const scanCardClass = `card__count conteiner ${scan ? "card__count_active" : ""}`;

  function handleClickProduct() {
    setScan(checkStatus.sku==='ok')
    handleScanProduct(item);
  };

  return(
    <div className={hiddenProductsClass} >
        <div className="card__info">
         {childImg}
          <p className="card__description">{item.description}</p>
          <button className={brandCardClass} >
            <img src={Icon} alt='Иконка штрихкода' className="card__icon" />
              <p>Нужно сканировать марку</p>
            </button>
          <div className={cancelCardClass}>
            <img src={IconCancel} alt='Иконка отмены' className="card__icon" />
            <p>Товар отменён</p>
          </div>
          <p className={tagCardClass} style={{gridRow:`${item.brand && '3/4'}`, marginTop:`${item.brand && '10px'}`}} >Пузырчатая плёнка</p>
        </div>
        {childCount ?  childCount :<div className={scanCardClass} >1 шт.</div> } 
        {childNumber ? childNumber :  <button className={numberCardClass} onClick={handleClickProduct} disabled={scan || item.cancel} >{item.sku}</button>}
      </div> 
  )
};

export default CardItem;
