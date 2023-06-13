import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Products from '../Products/Products';

function Main(props){
  return(
    <div className="page">
        <Header />
        <main className="content">
          <button className="content__button have-problem">Есть проблема</button>
          <Products cards={props.cards} onScanCard={props.onScanCard} />
            <button className="content__button close-box">Закрыть коробку</button>
        </main>
        <Footer />
    </div>
  )
};

export default Main;