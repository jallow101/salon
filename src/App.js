import "./App.css";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import Offer from "./Offer";
import Shop from "./Shop";

function App() {
  return (
    <div className="App h-screen snap-mandatory">
      <Header />
      <Banner />
      <Offer />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
