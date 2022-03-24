import './App.css';
import Banner from './Banner';
import Header from './Header';
import Offer from './Offer';
import Shop from './Shop';

function App() {
  return (
    <div className="App h-screen">
      <Header/>
      <Banner/>
      <Offer/>
      <Shop/>
    </div>
  );
}

export default App;
