import './App.css';
import Footer from '../Footer/Footer';
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import Products from '../Products/Products';

function App() {


  return (
      <div className="page">
        <NavbarMenu />
        <main className="content">
          <button className="content__button have-problem">Есть проблема</button>
          <Products />
            <button className="content__button close-box">Закрыть коробку</button>
        </main>
        <Footer />
      </div>
  );
}

export default App;
