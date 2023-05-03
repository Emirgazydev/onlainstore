
import './App.css';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product/Product";
import Basket from "./components/Basket/Basket";
import Favorites from "./components/Favorites";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
     <Header/>
        <Routes>
            <Route path={"/"} element={ <Home/> }/>
            <Route path={"/product"} element={ <Product/> }/>
            <Route path={"/basket"} element={ <Basket/> }/>
            <Route path={"/favorite"} element={ <Favorites/> }/>
            <Route path={"/details/:id"} element={ <ProductDetails/> }/>
        </Routes>
    </div>
  );
}

export default App;
