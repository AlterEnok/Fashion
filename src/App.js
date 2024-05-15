import Arrivals from './components/arrivals/Arrivals';
import Banner from './components/banner/Banner';
import Brands from './components/brands/Brands';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Mobile from './components/mobile/Mobile';
import Promo from './components/promo/Promo';

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Banner />
      <Mobile />
      <Footer />
    </div>
  );
}

export default App;
