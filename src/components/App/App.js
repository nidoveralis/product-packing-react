import React from 'react';
import './App.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Success from '../Success/Success';


import img0 from '../../images/img0.png'
import img1 from '../../images/img1.png'
import img3 from '../../images/img3.png'

const cardsExemple = [
  {
    _id: 0,
    description:'Умная колонка Яндекс Станция Лайт, ультрафиолет',
    count:1,
    img: img3,
    tag: 'Пузырчатая плёнка',
    barcode: ['9234 5678 234 32'],
    scan: 0,
    full: false
  },
  {
    _id:1,
    description:'Тарелка. Императорский фарфоровый завод. Форма "Стандартная - 2", рисунок "Скарлетт 2". Костяной фарфор . 270 мм.',
    count:3,
    img: img0,
    tag: '',
    barcode: ['9234 5678 234 33','9234 5678 234 36','9234 5678 234 37'],
    scan: 0,
    full: false
  },
  {
    _id:2,
    description:'Набор для рисования, детский художественный набор в чемоданчике, набор юного художника, 48 предметов и раскраска',
    count:2,
    img: img1,
    tag: '',
    barcode: ['9234 5678 234 34','9234 5678 234 35'],
    scan: 2,
    full: true
  }
]

function App() {
  const sentCards = [];
  const [cards, setCards] = React.useState(cardsExemple);
  const [cellAssembled, setCellAssembled] = React.useState(false);
  
  function onScanCard(item) {
    ////отправить запрос api
    //console.log(item)
    if(!item.full){
      item.scan++;
      sentCards.push(item.barcode);///доработать
      console.log(Math.floor(100 - (item.scan*100/item.count)))
      if(item.scan===item.barcode.length) {
        item.full=true;
      };
      setCards((state) => state.map((c) => c._id === item._id ? item : c));///доработать
    };
  };

  return (
      <div className="page">
        <Header />
        <main className="content">
          <button className="content__button have-problem">Есть проблема</button>
          {cellAssembled ? <Success /> : <Products cards={cards} onScanCard={onScanCard} />}
            <button className="content__button close-box">{cellAssembled ? 'Готово' : 'Закрыть коробку'}</button>
        </main>
        <Footer cellAssembled={cellAssembled} />
      </div>
  );
}

export default App;
