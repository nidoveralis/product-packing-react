import React from 'react';
import './App.css';
import Main from '../Main/Main';
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
  
  function onScanCard(item) {
    ////отправить запрос api
    console.log(item)
    if(!item.full){
      item.scan++;
      sentCards.push(item.barcode);///доработать
      if(item.scan===item.barcode.length) {
        item.full=true;
      };
      setCards((state) => state.map((c) => c._id === item._id ? item : c));///доработать
    };
  };

  return (
      <div className="page">
        <Main cards={cards} onScanCard={onScanCard} />
        
      </div>
  );
}

export default App;
