import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Statistic from '../Statistic/Statistic';

function Main(props){
  return(
    <>
        <Header  handleOpenStatistic={props.handleOpenStatistic} />
        <main className="content">
          <button className="content__button have-problem">Есть проблема</button>
          <Products cards={props.cards} onScanCard={props.onScanCard} />
            <button className="content__button close-box">Закрыть коробку</button>
        </main>
        <Footer />
        {props.openStatictic && <Statistic handleOpenStatistic={props.handleOpenStatistic} />}
        
    </>
  )
};

export default Main;