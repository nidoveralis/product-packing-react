import '../../vendor/fonts/fonts.css'
import './Statistic.css';
import {ReactComponent as Logo} from '../../images/el.svg'


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
          <h3 className='statistic-shift__title'>Текущая смена</h3>
        </div>
          <div className='statistic-shift__progress'>
            <p className='statistic-shift__interest'>125 %</p>
            <p className='statistic-shift__count'>5 операций</p>
          </div>
          <Logo className='statistic-shift__progress_corer' />
          <button className='statistic-shift__button'>Детализация смены</button>
        </div>
        <div className='statistic-shift'>
          <div className='statistic-shift__container'>
            <h3 className='statistic-shift__title'>Текущая операция</h3>
            <p className='statistic-shift__time'>00:16</p>
          </div>
          <div className='statistic-shift__progress'>
            <p className='statistic-shift__interest'>79 %</p>
            <p className='statistic-shift__count'>192 единицы</p>
          </div>
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