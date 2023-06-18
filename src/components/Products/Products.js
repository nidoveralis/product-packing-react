import React from 'react';
import Card from '../Card/Cards';
import './Products.css';
import {THEME_PACKAGE} from '../../utils/constants';

function Products({cards, onScanCard,packageType,visible}) {
  
  const classItemPack = `products__list-item products__list-item_pack conteiner ${visible ? '' : 'products_hidden'} `;

console.log(THEME_PACKAGE[packageType].name)
//packageType
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
      {cards.map((item)=>
        <Card key={item._id} item={item} onScanCard={onScanCard} />
      )}
    </ul>
  </div>

  )
}

export default Products;
