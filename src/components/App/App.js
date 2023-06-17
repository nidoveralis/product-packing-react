import React from 'react';
import './App.css';
import Main from '../Main/Main';
import {Route, Routes} from "react-router-dom";

import img0 from '../../images/img0.png'
import img1 from '../../images/img1.png'
import img3 from '../../images/img3.png'
import FirstPage from "../FirstPage/FirstPage";
import PackingPage from "../PackingPage/PackingPage";
import Success from "../Success/Success";
import { api } from '../../utils/Api';

const cardsExemple = [
  {
    _id: 0,
    description:'Умная колонка Яндекс Станция Лайт, ультрафиолет',
    count:1,
    img: img3,
    tag: 'Пузырчатая плёнка',
    barcode: '9234 5678 234 32',
    scan: 0,
    full: false
  },
  {
    _id:1,
    description:'Тарелка. Императорский фарфоровый завод. Форма "Стандартная - 2", рисунок "Скарлетт 2". Костяной фарфор . 270 мм.',
    count:3,
    img: img0,
    tag: '',
    barcode: '9234 5678 234 33',
    scan: 0,
    full: false
  },
  {
    _id:2,
    description:'Набор для рисования, детский художественный набор в чемоданчике, набор юного художника, 48 предметов и раскраска',
    count:2,
    img: img1,
    tag: '',
    barcode: '9234 5678 234 34',
    scan: 0,
    full: false
  }
]

const zaSmenu = 725;

/////возможно перенести в другой файл
const widthSideLine = 280;
const widthMediumLine = 560;
const widthAllLines = 1120;

function App() {
  const scanCount = Math.floor(zaSmenu * 100 / 1100);//колличество сканов для статистики
  const scanCount1 = 110;//колличество сканов для статистики текущей операции
  const sentCards = [];
  const [cards, setCards] = React.useState(cardsExemple);///массив с товарами
  const [openStatictic, setOpenStatictic] = React.useState(false);///открывать статистику
  const [statisticsShift, setStatisticsShift] = React.useState({1:0,2:0,3:0});
  const [staticsOperation, setStatisticsOperation] = React.useState({1:0,2:0,3:0});


  function calculateStatistics(count) {///считает статистику смены
    if(count >= 100) { 
      return {
        1:0,
        2:0,
        3:0
      }
    }else if(count >= 76) {
      return {
        1:0,
        2:0,
        3:Math.floor(11.2*count-widthAllLines)
      }
    }else if(count <= 75 && count > 25) {
      return {
        1:0,
        2:Math.floor(widthAllLines - widthSideLine -(11.2*count)),
        3:widthSideLine
      }
    }else if(count <= 25 && count >= 0) {
      return {
        1:Math.floor(widthSideLine-(11.2*count)),
        2:widthMediumLine,
        3:widthSideLine
      }
    }
  }

  React.useEffect(()=>{
    const a = calculateStatistics(scanCount);
    const b = calculateStatistics(scanCount1);
    setStatisticsShift(a);
    setStatisticsOperation(b)
  },[])

  React.useEffect(()=>{
    api.submitBox("order3").then(res=>console.log(res)).catch(err=>console.log(err))
  },[])
  
  function onScanCard(item) {////сканируе и отправляет на сервер
    ////отправить запрос api
    //console.log(item,index)
    if(!item.full){
      item.scan++;
      sentCards.push(item.barcode);///доработать
      if(item.scan===item.count) {
        item.full=true;
      };
      setCards((state) => state.map((c) => c._id === item._id ? item : c));///доработать
    };
  };

  function handleOpenStatistic() {
    setOpenStatictic(!openStatictic);
  };

  return (

      <Routes>
        <Route path="/" element={<FirstPage/>}/>
        <Route path="/main" element={<Main cards={cards} onScanCard={onScanCard} openStatictic={openStatictic} handleOpenStatistic={handleOpenStatistic} statisticsShift={statisticsShift} staticsOperation={staticsOperation} scanCount1={scanCount1} />}/>
        <Route path="/packing" element={<PackingPage type="YME"/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
  );
}

export default App;
