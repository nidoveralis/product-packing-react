import './Card.css';

function Card() {
  return (
    <div className="card">
      <div className="card__info">
        <div className="card__img" />
        <p className="card__description">Умная колонка Яндекс Станция Лайт, ультрафиолет</p>
        <button className="card__tag">Пузырчатая плёнка</button>
      </div>
      <div className="card__count card__count_no-one conteiner">2 из 2 шт.</div>
      <button className="card__number card__button-more">Развернуть</button>              
      </div>
  )
}

export default Card;