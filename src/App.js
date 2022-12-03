import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Cart from './components/Cart';
import Checkout from "./components/Checkout";
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
      <div className="App">
          <header className="App-header">
            <NavBar></NavBar>
          </header>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenidos!"/>} />
            <Route path="/category/:idcategory" element={<ItemListContainer />} />
            <Route path="/item/:iditem" element={<ItemDetailContainer />} />
            <Route path="/Cart" element= {<Cart />} />
            <Route path="/checkout" element= {<Checkout />} />
          </Routes>
          
          <Footer />
      
      </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

