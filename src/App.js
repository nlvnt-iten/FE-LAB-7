import './App.css';
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import Goods from "./components/Goods/Goods";

function App() {
  return (
    <div className="App">
      <Header />
       <MainContent />
        <Footer />
        <Goods />
    </div>
  );
}

export default App;
