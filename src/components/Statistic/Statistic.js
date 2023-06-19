import '../../vendor/fonts/fonts.css'
import './Statistic.css';
import React from 'react';
import Progress from '../Progress/Progress';
import ScanIcon from '../../images/icon_scan.svg';

function Statistic(props) {
  const statisticClass = `statistic ${props.openStatictic ? 'statistic_opened' : ''} `;


  return(
    <section className={statisticClass}>
      <div className='statistic__popup'>
        <div className='statistic-navbar'>
          <h3  className='statistic-navbar__title'>Моя эффективность</h3>
          <button  className='statistic-navbar__button conteiner' onClick={props.handleOpenStatistic}/>
        </div>
        <div className='statistic__container'>
        <div className='statistic-shift'>
        <div className='statistic-shift__container'>
          <h3 className='statistic-shift__title statistic-shift__title_shift'>Текущая смена</h3>
        </div>
          <div className='statistic-shift__progress'>
            <div className='statistic-shift__info'>
              <img className='statistic-shift__icon' src={ScanIcon}/>
              <p className='statistic-shift__text'>сканов</p>
            </div>
            <p className='statistic-shift__interest'>725</p>
            <p className='statistic-shift__count'>5 операций</p>
          </div>
          <Progress statics={props.statisticsShift} />
          <button className='statistic-shift__button'>Детализация смены</button>
        </div>
        <div className='statistic-shift'>
          <div className='statistic-shift__container'>
            <h3 className='statistic-shift__title'>Текущая операция</h3>
            <p className='statistic-shift__time'>{`${props.minute}:${props.second}`}</p>
          </div>
          <div className='statistic-shift__progress'>
            <div className='statistic-shift__info'>
              <img className='statistic-shift__icon' src={ScanIcon}/>
              <p className='statistic-shift__text'>сканов</p>
            </div>
            <p className='statistic-shift__interest'>{props.scanInOneHour}</p>
            <p className='statistic-shift__count'>за этот час</p>
          </div>
          <Progress statics={props.staticsOperation} />
          <div  className='shift__goals'>
            <p  className='shift__text'>Упаковка КГТ</p>
            <p  className='shift__text'>Цель: 100 / час</p>
          </div>
        </div>
        </div>

      </div>
      
    </section>
  )
}

export default Statistic;