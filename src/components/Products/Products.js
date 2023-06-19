import React from 'react';
import Card from '../Card/Cards';
import './Products.css';
import {THEME_PACKAGE} from '../../utils/constants';

function Products({cards, onScanCard,packageType,visible, checkStatus}) {
  
  const classItemPack = `products__list-item products__list-item_pack conteiner ${visible ? '' : 'products_hidden'} `;

  return(
    <div className="products">
    <h5 className="products__title">Сканируйте товары из ячейки</h5>
    <h2 className="products__subtitle">B-09</h2>
      <ul className="products__list">
        <li className="products__list-item conteiner">6 товаров</li>
        <li className="products__list-item conteiner">Почта России</li>
        <li className={classItemPack} style={{backgroundColor:THEME_PACKAGE[packageType].color}} >{visible && THEME_PACKAGE[packageType].name}</li>
      </ul>
    <ul className="cards">
      {cards.map((item,index)=>
        <Card key={index} item={item} onScanCard={onScanCard} checkStatus={checkStatus} />
      )}
    </ul>
  </div>

  )
}

export default Products;
