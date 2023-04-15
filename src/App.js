import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Carousel from './Carousel';
import About from './About';
import Cards from './Cards';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <About/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
