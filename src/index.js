import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Pages/Home';
import { Cart } from './Pages/Cart';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ProductList from './Pages/ProductList';
import Product from './Pages/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Router>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
    </Routes>
    <Routes>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    <Routes>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    <Routes>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    <Routes>
      <Route path="/products" element={<ProductList/>}/>
    </Routes>
    <Routes>
      <Route path="/product" element={<Product/>}/>
    </Routes>
  </Router>,

);

