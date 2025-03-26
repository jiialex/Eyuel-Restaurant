import React, { useState } from 'react';
import kitfo from '../images/Kitfo.png';
import shekla from '../images/sheklatibs.png';
import gomenkitfo from '../images/gomenkitfo.png';
import food from '../images/Ethiopian-Food.png';
import tibs from '../images/tibs.png';
import beyeaynet from '../images/homeb.png';
import cumboo from '../images/cumboo.png'; 
import hancootee from '../images/hancootee.png';
import caccabsaa from '../images/caccabsaa.png';
import '../styles/Dishes.css';


function Dishes() {
  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorites = (dishName) => {
    if (!favorites.includes(dishName)) {
      setFavorites([...favorites, dishName]); 
    }
  };

  const renderStars = (dishName) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className="fas fa-star"
          onClick={() => handleAddToFavorites(dishName)} 
          style={{ cursor: 'pointer', color: favorites.includes(dishName) ? '#FFD700' : '#ccc' }} 
        ></i>
      );
    }
    return stars;
  };

  return (
    <div className="container">
      <div className="head">
        <h1 style={{ textAlign: 'center' }}>Our Dishes</h1>
        <h3 style={{ textAlign: 'center' }}>Popular Dishes</h3>
      </div>
      <div className="cards-container">
        <div className="card">
          <img src={kitfo} className="card-img-top" alt="kitfo" />
          <div className="card-body">
            <h5 className="card-title">Kitfo</h5>
            <h3>Taste Now</h3>
            <p className="card-text">Kitfo is Gurage special food <br /> made of meat and so tasty.</p>
            <div className="stars">{renderStars('SheklaTibs')}</div>
            <span>$20.15</span>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>

        <div className="card">
          <img src={shekla} className="card-img-top" alt="shekla" />
          <div className="card-body">
            <h5 className="card-title">SheklaTibs</h5>
            <h3>Taste Now</h3>
            <p className="card-text">Shekla Tibs is one of Ethiopian<br /> traditional foods with a unique taste.</p>
            <div className="stars">{renderStars('SheklaTibs')}</div>
            <span>$20.15</span>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>

        <div className="card">
          <img src={gomenkitfo} className="card-img-top" alt="gomenkitfo" />
          <div className="card-body">
            <h5 className="card-title">GomenKitfo</h5>
            <h3>Taste Now</h3>
            <p className="card-text">GomenKitfo is a traditional Gurage dish<br /> loved for its rich flavor.</p>
            <div className="stars">{renderStars('GomenKitfo')}</div>
            <span>$10.15</span>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>

        <div className="card">
          <img src={tibs} className="card-img-top" alt="tibs" />
          <div className="card-body">
            <h5 className="card-title">Tibs</h5>
            <h3>Taste Now</h3>
            <p className="card-text">Sautéed meat cooked with onions, tomatoes,<br /> and spices, often served sizzling hot.</p>
            <div className="stars">{renderStars('Tibs')}</div>
            <span>$14.15</span>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>

        <div className="card">
          <img src={food} className="card-img-top" alt="timatim lebleb" />
          <div className="card-body">
            <h5 className="card-title">Timatim Lebleb</h5>
            <h3>Taste Now</h3>
            <p className="card-text">A simple dish made with sautéed tomatoes.<br /> Occasional and flavorful.</p>
            <div className="stars">{renderStars('TimatimLebleb')}</div>
            <span>$25</span>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>

        <div className="card">
          <img src={beyeaynet} className="card-img-top" alt="beyeaynet" />
          <div className="card-body">
            <h5 className="card-title">Beyeaynet</h5>
            <h3>Taste Now</h3>
            <p className="card-text">An Ethiopian vegan platter composed of<br /> curries and veggies.</p>
            <div className="stars">{renderStars('Beyeaynet')}</div>
            <span>$17</span>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>

        <div className="card">
          <img src={cumboo} className="card-img-top" alt="cumboo" />
          <div className="card-body">
            <h5 className="card-title">Cumboo</h5>
            <h3>Taste Now</h3>
            <p className="card-text">Traditional Oromo food that you’ll<br /> love to taste.</p>
            <div className="stars">{renderStars('Cumboo')}</div>
            <span>$18</span>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>

        <div className="card">
          <img src={hancootee} className="card-img-top" alt="hancootee" />
          <div className="card-body">
            <h5 className="card-title">Hancootee</h5>
            <h3>Taste Now</h3>
            <p className="card-text">A famous traditional Oromo dish<br /> cherished by many.</p>
            <div className="stars">{renderStars('Hancootee')}</div>
            <span>$30</span>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>

        <div className="card">
          <img src={caccabsaa} className="card-img-top" alt="caccabsaa" />
          <div className="card-body">
            <h5 className="card-title">Caccabsaa</h5>
            <h3>Taste Now</h3>
            <p className="card-text">A favorite dish of the Oromo people.<br /> It’s the dish you deserve.</p>
            <div className="stars">{renderStars('Caccabsaa')}</div>
            <span>$23</span>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dishes;
