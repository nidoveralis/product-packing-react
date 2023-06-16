import Card from '../Card/Cards';
import './Products.css';


function Products({cards, onScanCard}) {


  return(
    <div className="products">
    <h1 className="products__title">Сканируйте товары из ячейки</h1>
    <h2 className="products__subtitle">B-09</h2>
      <ul className="products__list">
        <li className="products__list-item conteiner">6 товаров</li>
        <li className="products__list-item conteiner">Почта России</li>
        <li className="products__list-item products__list-item_pack conteiner">Коробка YMF</li>
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
