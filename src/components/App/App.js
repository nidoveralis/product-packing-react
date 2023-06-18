import React from 'react';
import './App.css';
import Main from '../Main/Main';
import {Route, Routes} from "react-router-dom";

import img0 from '../../images/img0.png';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';
import img4 from '../../images/img4.png';
import FirstPage from "../FirstPage/FirstPage";
import PackingPage from "../PackingPage/PackingPage";
import Success from "../Success/Success";
import { THEME_BUTTON,WIDTH_SIDE_LINE,WIDTH_MEDIUM_LINE,WIDTH_ALL_LINE } from "../../utils/constants"
import { api } from '../../utils/Api';

const cardsExemple = [
  {
    _id: 0,
    description:'Умная колонка Яндекс Станция Лайт, ультрафиолет',
    count:1,
    img: img3,
    tag: 'Пузырчатая плёнка',
    brand: false,
    barcode: '9234 5678 234 32',
    scan: 0,
    full: false,
    cancel: false
  },
  {
    _id:1,
    description:'Тарелка. Императорский фарфоровый завод. Форма "Стандартная - 2", рисунок "Скарлетт 2". Костяной фарфор . 270 мм.',
    count:3,
    img: img0,
    tag: '',
    brand: false,
    barcode: '9234 5678 234 33',
    scan: 0,
    full: false,
    cancel: false
  },
  {
    _id:2,
    description:'Набор для рисования, детский художественный набор в чемоданчике, набор юного художника, 48 предметов и раскраска',
    count:2,
    img: img1,
    tag: '',
    brand: false,
    barcode: '9234 5678 234 34',
    scan: 0,
    full: false,
    cancel: false
  },
  {
    _id:3,
    description:'Умные часы Apple Watch Series 7 45 мм Aluminium Case, (PRODUCT)RED',
    count:1,
    img: img2,
    tag: 'Пузырчатая плёнка',
    brand: true,
    barcode: '9234 5678 234 34',
    scan: 0,
    full: false,
    cancel: false
  },
  {
    _id:3,
    description:'Модуль с Яндекс.ТВ - Смарт.ТВ с Алисой [4K], черный',
    count:1,
    img: img4,
    tag: '',
    brand: false,
    barcode: '9234 5678 234 34',
    scan: 0,
    full: false,
    cancel: true
  }
]




const packageType = 'YME'

const zaSmenu = 725;

/////возможно перенести в другой файл


function App() {
  const scanCount = Math.floor(zaSmenu * 100 / 1100);//колличество сканов для статистики
  const scanInOneHour = 110;//колличество сканов за час для статистики текущей операции
  const sentCards = [];
  const [cards, setCards] = React.useState(cardsExemple);///массив с товарами
  const [openStatictic, setOpenStatictic] = React.useState(false);///открывать статистику
  const [statisticsShift, setStatisticsShift] = React.useState({1:0,2:0,3:0});
  const [staticsOperation, setStatisticsOperation] = React.useState({1:0,2:0,3:0});
  const [userStatusTheme, setUserStatusTheme] = React.useState(THEME_BUTTON.default);
  const [visible,setVisible] = React.useState(false);

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
        3:Math.floor(11.2*count-WIDTH_ALL_LINE)
      }
    }else if(count <= 75 && count > 25) {
      return {
        1:0,
        2:Math.floor(WIDTH_ALL_LINE - WIDTH_SIDE_LINE -(11.2*count)),
        3:WIDTH_SIDE_LINE
      }
    }else if(count <= 25 && count >= 0) {
      return {
        1:Math.floor(WIDTH_SIDE_LINE-(11.2*count)),
        2:WIDTH_MEDIUM_LINE,
        3:WIDTH_SIDE_LINE
      }
    }
  }

  React.useEffect(()=>{
   ///// api.submitBox("order3").then(res=>console.log(res)).catch(err=>console.log(err))
  },[])

  function onScanCard(item) {////сканируе и отправляет на сервер
    setVisible(true);
    if(!item.full){
      item.scan++;
      sentCards.push(item.barcode);
      if(item.scan===item.count) {
        item.full=true;
      };
      setCards((state) => state.map((c) => c._id === item._id ? item : c));
    };
  };

  function handleOpenStatistic() {
    setOpenStatictic(!openStatictic);
  };

  function decideThemeButton() {
    if(scanInOneHour<=80 && scanInOneHour>=60) {
      setUserStatusTheme(THEME_BUTTON.normal);
    }else if(scanInOneHour<=60) {
      setUserStatusTheme(THEME_BUTTON.bad);
    }else if(scanInOneHour===100) {
      setUserStatusTheme(THEME_BUTTON.good);
    }else if(scanInOneHour>100) {
      setUserStatusTheme(THEME_BUTTON.excellent);
    };
  };

  React.useEffect(()=>{
    const a = calculateStatistics(scanCount);
    const b = calculateStatistics(scanInOneHour);
    setStatisticsShift(a);
    setStatisticsOperation(b);
    decideThemeButton();
  },[]);

  return (
      <Routes>
        <Route path="/" element={<FirstPage />}/>
        <Route path="/main" element={<Main 
          cards={cards} onScanCard={onScanCard} 
          openStatictic={openStatictic} 
          handleOpenStatistic={handleOpenStatistic} 
          statisticsShift={statisticsShift} 
          staticsOperation={staticsOperation} 
          scanCount={scanCount} 
          scanInOneHour={scanInOneHour} 
          userStatusTheme={userStatusTheme}
          packageType={packageType}
          visible={visible}
          />}/>
        <Route path="/packing" element={<PackingPage type="YME"/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
  );
}

export default App;
