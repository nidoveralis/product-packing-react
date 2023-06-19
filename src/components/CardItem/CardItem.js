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


  const [hiddenProducts,setHiddenProducts]= React.useState(item.amount===1 ? false : true);

  const countContent = item.scan===0 ? `${item.amount} шт.` : `${item.scan} из ${item.amount} шт.`;
  const progressCardClass = `progress-bar__subtitle ${checkStatus.full ? "progress-bar__subtitle_active" : ""}`;
  const progressColor = `${Math.floor((100 / item.amount) * item.scan)}%`;
  const progressGradient = `linear-gradient(to right, #2AAD2E ${progressColor},#E8E8E8 ${progressColor})`
  //const hiddenProductsClass = `card__conteiner ${item.amount==1 ? "conteiner_hidden" : ""}`;
  const numberImgClass = `card__number-img ${!hiddenProducts ? "card__number-img_active" : ""}  ${item.cancel && "cansel-text"}`;
  const hiddenProductsList = `card__conteiner ${hiddenProducts ? "conteiner_hidden" : ""} ${item.cancel && "cansel-text"}`;

  function openHiddenProducts() {
    setHiddenProducts(!hiddenProducts);
  };

  //function handleScanProduct() {
  //  onScanCard(item);
  //};

  const a = <button className="card__number" onClick={openHiddenProducts}  disabled={item.cancel}>
  <p className="card__number-text" >{hiddenProducts ? "Развернуть" : "Свернуть"}</p>
  <div className={numberImgClass} ></div>
</button>

const b = <button className={numberCardClass} onClick={handleClickProduct} disabled={scan || item.cancel} >{item.sku}</button>

  function handleClickProduct() {
    setScan(true)
    handleScanProduct(item);
  };
console.log(childNumber)
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
