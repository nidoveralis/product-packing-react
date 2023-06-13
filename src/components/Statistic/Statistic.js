import '../../vendor/fonts/fonts.css'
import './Statistic.css';


function Statistic() {
  return(
    <section className='statistic'>
      <div className='statistic__navbar'>
        <h3>Моя эффективность</h3>
        <button>x</button>
      </div>
      <div className='statistic__container'>
      <div className='statistic-shift'>
        <h3 className='statistic-shift__title'>Текущая смена</h3>
        <div className='statistic-shift__progress'>
          <p className='statistic-shift__interest'>125 %</p>
          <p className='statistic-shift__count'>5 операций</p>
        </div>
        <button className='statistic-shift__button'>Детализация смены</button>
      </div>
      <div className='statistic-shift'>
        <h3 className='statistic-shift__title'>Текущая операция</h3>
        <span />
        <p className='statistic-shift__time'>00:16</p>
        <div className='statistic-shift__progress'>
          <p className='statistic-shift__interest'>79 %</p>
          <p className='statistic-shift__count'>192 единицы</p>
        </div>
        <div  className='shift__goals'>
          <p>Упаковка КГТ</p>
          <p>Цель: 100 / час</p>
        </div>
      </div>
      </div>

    </section>
  )
}

export default Statistic;