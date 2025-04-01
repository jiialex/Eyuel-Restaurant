import React from 'react';
import '../styles/reservation.css'
import book1 from '../images/book1.png'
import book2 from '../images/book2.png'
import book3 from '../images/book3.png'

function Reservation() {
  return (
    <div className='reserve'>
      <h1>the perfect <br /> base for you</h1>
      <h4>restaurant reservation</h4>
      <button className='btn' id="btn">take a book</button>
<div className='image'>
    <img src={book1} alt="" />
    <img src={book2} alt="" />
    <img src={book3} alt="" />

</div>
      <div className='form'>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required /><br /><br />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required /><br /><br />

          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" required /><br /><br />

          <label htmlFor="date">Reservation Date</label>
          <input type="date" id="date" name="date" required /><br /><br />

          <label htmlFor="time">Reservation Time:</label>
          <input type="time" id="time" name="time" required /><br /><br />

          <label htmlFor="guests">Number of Guests</label>
          <input type="number" id="guests" name="guests" min="1" required /><br /><br />

          <button type="submit">Reserve</button>
        </form>
      </div>
    </div>
  );
}

export default Reservation;
