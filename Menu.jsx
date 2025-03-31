import React from 'react';
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
  return (
    <div className="menu" id="menu">
      <h3 className="sub-heading">Our Menu</h3>
      <h1 className="heading">Today's Speciality</h1>
      <div className="box-container">

        <div className="box">
          <div className="image">
            <img src={food1} alt="Delicious food 1" />
            <a href="#" className="fas fa-heart" ></a>
          <div className="content">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <a href="#" className="btn">Add to Cart</a>
            <span className="price">$10.99</span>
          </div>
        </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={food2} alt="Delicious food 2" />
            <a href="#" className="fas fa-heart"></a>
          </div>
          <div className="content">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <a href="#" className="btn">Add to Cart</a>
            <span className="price">$15.49</span>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={food3} alt="Delicious food 3" />
            <a href="#" className="fas fa-heart"></a>
          </div>
          <div className="content">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <a href="#" className="btn">Add to Cart</a>
            <span className="price">$7.99</span>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={food4} alt="Delicious food 4" />
            <a href="#" className="fas fa-heart"></a>
          </div>
          <div className="content">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <a href="#" className="btn">Add to Cart</a>
            <span className="price">$6.50</span>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={food5} alt="Delicious food 5" />
            <a href="#" className="fas fa-heart"></a>
          </div>
          <div className="content">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <a href="#" className="btn">Add to Cart</a>
            <span className="price">$11.99</span>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={food6} alt="Delicious food 6" />
            <a href="#" className="fas fa-heart"></a>
          </div>
          <div className="content">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <a href="#" className="btn">Add to Cart</a>
            <span className="price">$24.99</span>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={food7} alt="Delicious food 7" />
            <a href="#" className="fas fa-heart"></a>
          </div>
          <div className="content">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <a href="#" className="btn">Add to Cart</a>
            <span className="price">$21.99</span>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={tej} alt="Delicious Tej" />
            <a href="#" className="fas fa-heart"></a>
          </div>
          <div className="content">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <a href="#" className="btn">Add to Cart</a>
            <span className="price">$15.99</span>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={tejkor} alt="Korer Tej" />
            <a href="#" className="fas fa-heart"></a>
          </div>
          <div className="content">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <a href="#" className="btn">Add to Cart</a>
            <span className="price">$16.99</span>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={abish} alt="Abish" />
            <a href="#" className="fas fa-heart"></a>
          </div>
          <div className="content">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <a href="#" className="btn">Add to Cart</a>
            <span className="price">$15.99</span>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={food9} alt="" />
            <a href="#" className="fas fa-heart"></a>
          </div>
          <div className="content">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <a href="#" className="btn">Add to Cart</a>
            <span className="price">$15.99</span>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={coffee} alt="" />
            <a href="#" className="fas fa-heart"></a>
          </div>
          <div className="content">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <a href="#" className="btn">Add to Cart</a>
            <span className="price">$12.99</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;

