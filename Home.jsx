import React from 'react';
import { Link } from 'react-router-dom';
import dorowat from '../images/dorowat.png';
import '../styles/home.css';

function Home() {
  return (
    <div className="home">
      <div className="textContainer">
        <h1>Doro Wat</h1>
        <p>Doro Wat - Ethiopian special food</p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
      <div className="imageContainer">
        <img src={dorowat} alt="Doro Wat" />
      </div>
    </div>
  );
}

export default Home;
