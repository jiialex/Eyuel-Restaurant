import React, { useState } from 'react';
import food1 from '../images/food1.png';
import food2 from '../images/food2.png';
import food3 from '../images/food3.png';
import food4 from '../images/food4.png';
import food5 from '../images/food5.png';
import food6 from '../images/food6.png';
import food7 from '../images/food7.png';
import tej from '../images/tej.png';
import abish from '../images/abish.png';
import tejkor from '../images/korertej.png';
import coffee from '../images/coffee.png';
import food9 from '../images/food9.png';
import '../styles/menu.css';

function Menu() {
  const [cart, setCart] = useState([]);
  const [ratings, setRatings] = useState({});

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    alert(`${item} has been added to your cart.`);
  };

  const handleRating = (itemId, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [itemId]: prevRatings[itemId] === rating ? 0 : rating, 
    }));
  };

  const clearRating = (itemId) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [itemId]: 0,
    }));
  };

  const menuItems = [
    { id: 1, name: 'Delicious Food 1', image: food1, price: '$10.99', width: '200%', height: '600px' },
    { id: 2, name: 'Delicious Food 2', image: food2, price: '$15.49', width: '100%', height: '400px' },
    { id: 3, name: 'Delicious Food 3', image: food3, price: '$7.99', width: '100%', height: '400px' },
    { id: 4, name: 'Delicious Food 4', image: food4, price: '$6.50', width: '100%', height: '400px' },
    { id: 5, name: 'Delicious Food 5', image: food5, price: '$11.99', width: '100%', height: '400px' },
    { id: 6, name: 'Delicious Food 6', image: food6, price: '$24.99', width: '100%', height: '400px' },
    { id: 7, name: 'Delicious Food 7', image: food7, price: '$21.99', width: '100%', height: '400px' },
    { id: 8, name: 'Delicious Tej', image: tej, price: '$15.99', width: '100%', height: '400px' },
    { id: 9, name: 'Korer Tej', image: tejkor, price: '$16.99', width: '100%', height: '400px' },
    { id: 10, name: 'Abish', image: abish, price: '$15.99', width: '100%', height: '400px' },
    { id: 11, name: 'Delicious Food 9', image: food9, price: '$15.99', width: '100%', height: '400px' },
    { id: 12, name: 'Coffee', image: coffee, price: '$12.99', width: '100%', height: '400px' },
  ];
  
  return (
    <div className="menu" id="menu">
  <h3 className="sub-heading">Our Menu</h3>
  <h1 className="heading">Today's Speciality</h1>
  <div className="box-container">
    {menuItems.map((item) => (
      <div className="box" key={item.id}>
        <div className="image">
          <img src={item.image} alt={item.name} />
          <a href="#" className="fas fa-heart"></a>
        </div>
        <div className="content">
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <i
                key={star}
                className={`fas ${star <= (ratings[item.id] || 0) ? 'fa-star' : 'fa-star-half-alt'}`}
                onClick={() => handleRating(item.id, star)}
                style={{
                  color: star <= (ratings[item.id] || 0) ? 'green' : '#ccc',
                  cursor: 'pointer',
                }}
              ></i>
            ))}
          </div>
          <button onClick={() => addToCart(item.name)} className="btn">
            Add to Cart
          </button>
          <span className="price">{item.price}</span>
        </div>
      </div>
    ))}
  </div>
</div>
  )}
  export default Menu;