import React from 'react';
import '../styles/order.css'

function Order() {
  return (
    <div className='order' id="order">
      <h3 className='sub-heading'>Order now</h3>
      <h1 className='heading'>Free and fast</h1>
      <form action="">
        <div className='inputbox'>
          <div className='input'>
            <span>Your name</span>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className='input'>
            <span>Your number</span>
            <input type="number" placeholder="Enter your number" />
          </div>
          <div className='input'>
            <span>Your order</span>
            <input type="text" placeholder="Enter your food name" />
          </div>
          <div className='input'>
            <span>Your additional food</span>
            <input type="test" placeholder="Extra with food" />
          </div>
          <div className='input'>
            <span>how much</span>
            <input type="number" placeholder="how many orders" />
          </div>
          <div className='input'>
            <span>date and time</span>
            <input type="datetime-local" />
          </div>
          <div className='input'>
            <span>your address</span>
             <textarea name="" placeholder="enter your address" id="" cols="30" rows="10" />
          </div>
          <div className='input'>
          <span>your message</span>
          <textarea name="" placeholder="enter your message" id="" cols="30" rows="10" />
          </div>
        </div>
        <input type="submit" value="order now" class="btn"></input>
      </form>
    </div>
  );
}

export default Order;
