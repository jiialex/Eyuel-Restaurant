import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; 
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Dishes from './Components/Dishes';
import About from './Components/About.jsx';
import Menu from './Components/Menu.jsx';
import Review from './Components/Review.jsx'
import Order from './Components/Order.jsx'
import Reservation from './Components/Reservation.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/review" element={<Review />} />
        <Route path="/order" element={<Order />} />
        <Route path="/reservation" element={<Reservation />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
