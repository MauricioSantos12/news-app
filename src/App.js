import './App.css';
import Header from './components/Header/Header';
import NewsGrid from './components/NewsGrid/NewsGrid';
import SliderNews from './components/SliderNews/SliderNews';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <NewsGrid />
      <SliderNews />
      <Footer />
    </div>
  );
}

export default App;
