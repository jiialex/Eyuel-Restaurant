import React from 'react'
import ethiofood from '../images/ethio-food.png'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
    <h1 className="sub-heading">About Us</h1>
    <h3 className='heading'>Why Choose Us?</h3>
    <div className='row'>
        <div className='image'>
            <img src={ethiofood} alt="ethiopian-food" />
        </div>

        <div className='content'>
            <h4>best food in the country</h4>
            <p>there are a lot of best and traditional 
            dishes in ethiopia and those are available and you get from our restaurant
            those are Gored gored, tihlo,ful,fatira,minchet, keywet,dorowat
            and also cumbo and caccabsaa are our best and delicous dishes.</p>
            <div className='icon-container'>
                <div className='icons'>
                    <i className='fas fa-shipping-fast'></i>
                    <span>free delivery</span>
                </div>
                <div className='icons'>
                    <i className='fas fa-dollar-sign'></i>
                    <span> easy payment</span>

                </div>
                <div className='icons'>
                    <i className='fas fa-headset'></i>
                    <span>24/7 services</span>
                </div>
            </div>
            <a href="#" className='btn'>learn more</a>
        </div>

    </div>
    </div>
  )
}

export default About;