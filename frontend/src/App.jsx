// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Collection from './pages/collection';
import About from './pages/about';
import Contact from './pages/contact';
import Product from './pages/product';
import Cart from './pages/cart';
import Login from './pages/login';
import PlaceOrder from './pages/placeOrder';
import Orders from './pages/orders';
import Navbar from './components/navbar';

const App = () => {
  return (
    <div>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/placeOrder' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>

      <Collection />

    </div>
  );
}

export default App;
