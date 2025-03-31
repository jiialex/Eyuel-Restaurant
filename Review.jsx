import React from 'react';
import sena from '../images/sena.png';
import fenu from '../images/fenu.png';
import kiddy from '../images/kiddy.png';
import jii from '../images/jii.png';

import '../styles/review.css';

function Review() {
  return (
    <div className='review' id="review">
      <h3 className='sub-heading'>Customer's Review</h3>
      <h1 className='heading'>What They Say</h1>

      <div className='swiper-container review-slider'>
        <div className='swiper-wrapper'>

     
          <div className='swiper-slide slide'>
            <i className='fas fa-quote-right'></i>
            <div className='user'>
              <img src={sena} alt="Reviewer Sena" />
              <div className='user-info'>
                <h3>Sena</h3>
                <div className='stars'>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star-half-alt'></i>
                </div>
              </div>
            </div>
            <p>Dishes and services of this restaurant are really special. Everyone must come and judge. I’m really satisfied! 🥰☺️</p>
          </div>


          <div className='swiper-slide slide'>
            <i className='fas fa-quote-right'></i>
            <div className='user'>
              <img src={fenu} alt="Reviewer Sena" />
              <div className='user-info'>
                <h3>fenet</h3>
                <div className='stars'>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star-half-alt'></i>
                </div>
              </div>
            </div>
            <p>i get the taste of my mother.i remember my childhood memory when i taste the dishes of this house.it's really special and delicous</p>
          </div>

          <div className='swiper-slide slide'>
            <i className='fas fa-quote-right'></i>
            <div className='user'>
              <img src={kiddy} alt="Reviewer Sena" />
              <div className='user-info'>
                <h3>kidist</h3>
                <div className='stars'>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star-half-alt'></i>
                </div>
              </div>
            </div>
            <p>there are alot of different dishes and amazing taste that reflect our country differently!!</p>
          </div>
          
          <div className='swiper-slide slide'>
            <i className='fas fa-quote-right'></i>
            <div className='user'>
              <img src={jii} alt="Reviewer Sena" />
              <div className='user-info'>
                <h3>jitu</h3>
                <div className='stars'>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star-half-alt'></i>
                </div>
              </div>
            </div>
            <p>i like this restaurant because i get the taste and every my counrty dishes so that makes this restaurant great and special!🥰❤️❤️❤️</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;

