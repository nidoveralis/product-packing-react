import React from 'react';
import './App.css';
import Main from '../Main/Main';
import {HashRouter, Route, Routes, useNavigate} from "react-router-dom";

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

const items = [
  {
    description:'Умная колонка Яндекс Станция Лайт, ультрафиолет',
    amount:1,
    img: img3,
    repackaging: true,
    sku: '60a925ae8e9a0614e9bfbc0ff3e312fd',
    scan: 0,
    full: false
  },
  {
    description:'Тарелка. Императорский фарфоровый завод. Форма "Стандартная - 2", рисунок "Скарлетт 2". Костяной фарфор . 270 мм.',
    amount:3,
    img: img0,
    repackaging: false,
    sku: '63866686c5b036917ed57f86d207c463',
    scan: 0,
    full: false
  },
  {
    description:'Набор для рисования, детский художественный набор в чемоданчике, набор юного художника, 48 предметов и раскраска',
    amount:2,
    img: img1,
    repackaging: false,
    sku: '79a24dd2e26f2a6c8b89af68bae28fa4',
    scan: 0,
    full: false
  },
  {
    description:'Умные часы Apple Watch Series 7 45 мм Aluminium Case, (PRODUCT)RED',
    amount:1,
    img: img2,
    repackaging: true,
    sku: '8444d19d31e94c9cd5085caf0f323f1a',
    scan: 0,
    full: false
  },
  {
    description:'Модуль с Яндекс.ТВ - Смарт.ТВ с Алисой [4K], черный',
    amount:1,
    img: img4,
    repackaging: false,
    sku: 'd416c6afd5e2a55a7870264a29a64a97',
    scan: 0,
    full: false
  }
]


//const packageType = 'MYF'
const scanInOneShift = 725;

function App() {
  const navigate = useNavigate();
  const scanCount = Math.floor(scanInOneShift * 100 / 1100);//колличество сканов для статистики
  const scanInOneHour = 60;//колличество сканов за час для статистики текущей операции
  const sentCards = [];
  const [cards, setCards] = React.useState();///массив с товарами
  const [scanFullProducts, setScanFullProducts] = React.useState(1);
  const [openStatictic, setOpenStatictic] = React.useState(false);///открывать статистику
  const [statisticsShift, setStatisticsShift] = React.useState({1:0,2:0,3:0});
  const [staticsOperation, setStatisticsOperation] = React.useState({1:0,2:0,3:0});
  const [userStatusTheme, setUserStatusTheme] = React.useState(THEME_BUTTON.default);
  const [visible,setVisible] = React.useState("hidden");
  const [timer,setTimer] = React.useState(false);
  const [minute,setMinute] = React.useState(60);
  const [second,setSecond] = React.useState(0);
  const [box, setBox] = React.useState();
  const [packageType, setPackageType] = React.useState("");
  const [checkStatus, setCheckStatus] = React.useState({full:false,sku: false});


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
  };

  React.useEffect(()=>{
    api.submitBox("order3")
    .then(res=>{
      setTimer(true);
        setPackageType(res.selected_carton)
      setBox(res.boxes[0].box);
      if(box) {
        api.addedNewOrder(res)
        .then(res=>{setCards(res);navigate('/main') })
        .catch(err=>console.log(err))
      }
    })
    .catch(err=>console.log(err))
  },[])

  function onScanCard(item) {////сканируе и отправляет на сервер
    setVisible("");
    api.checkProduct(item.sku)
      .then(res=>{
        setCheckStatus({full:res.finish,sku: res.status})
    })
    .catch(err=>console.log(err))
    if(!item.full){
      item.scan++;
      sentCards.push(item.sku);
      setCheckStatus({full:false,sku: 'ok'})
      if(item.scan===item.amount) {
        setScanFullProducts(scanFullProducts+1);
        item.full=true;
        if(scanFullProducts===cards.length) {
          setVisible("button_active");
        }
      };
      setCards((state) => state.map((c) => c.sku === item.sku ? item : c));
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

  function closeBox() {
    navigate('/product-packing-react/packing');
  };

  function selectBox(type) {
    api.checkCarton(type)
    .then(res=>{
        if(res.status==='ok') {
          navigate('/product-packing-react/success');
        }
       })
     .catch(err=>console.log(err))
  };

  React.useEffect(()=>{
    const a = calculateStatistics(scanCount);
    const b = calculateStatistics(scanInOneHour);
    setStatisticsShift(a);
    setStatisticsOperation(b);
    decideThemeButton();
  },[]);

  React.useEffect(() => {
    if (second > 0 && timer) {
      setTimeout(setSecond, 1000, second - 1);
    } else {
      setTimer(false);
    }
    if(second===0) {
      setSecond(59);
      setMinute(minute-1);
    }
    if(second===0 && minute===0) {
      setTimer(false);
    }
  }, [ second, timer ]);

  return (
      <Routes>
        <Route path="/product-packing-react/" element={<FirstPage
          handleOpenStatistic={handleOpenStatistic}
          scanCount={scanCount}
          userStatusTheme={userStatusTheme}
          scanInOneHour={scanInOneHour}
          second={second}
          minute={minute}
          openStatictic={openStatictic} 
          statisticsShift={statisticsShift} 
          staticsOperation={staticsOperation}
        />}/>
        <Route path="/product-packing-react/main" element={<Main
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
          second={second}
          minute={minute}
          checkStatus={checkStatus}
          closeBox={closeBox}
          />}/>
        <Route path="/product-packing-react/packing" element={<PackingPage
          type={packageType}
          handleOpenStatistic={handleOpenStatistic}
          scanCount={scanCount}
          userStatusTheme={userStatusTheme}
          scanInOneHour={scanInOneHour}
          selectBox={selectBox}
          second={second}
          minute={minute}
          openStatictic={openStatictic} 
          statisticsShift={statisticsShift} 
          staticsOperation={staticsOperation}
          />}/>
        <Route path="/product-packing-react/success" element={<Success
          handleOpenStatistic={handleOpenStatistic}
          scanCount={scanCount}
          userStatusTheme={userStatusTheme}
          scanInOneHour={scanInOneHour}
          second={second}
          minute={minute}
          openStatictic={openStatictic} 
          statisticsShift={statisticsShift} 
          staticsOperation={staticsOperation}
        />}/>
      </Routes>
  );
}

export default App;
