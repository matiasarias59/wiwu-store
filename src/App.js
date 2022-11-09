import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from './components/Footer';
import Contacto from './components/Contacto';
import QuienesSomos from './components/QuienesSomos';


function App() {
  return (

    <BrowserRouter>
    <div className="App">
        <header className="App-header">
          <NavBar></NavBar>
        </header>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos!"/>} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/category/:idcategory" element={<ItemListContainer />} />
          <Route path="/item/:iditem" element={<ItemDetailContainer />} />

        </Routes>
        
        <Footer />
    
    </div>
    </BrowserRouter>
  );
}

export default App;

