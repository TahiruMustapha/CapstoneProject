import React from 'react'
import '../styles/Footer.css'
import redstar from '../images/redstar.png'
import { FaCartPlus } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import logo from '../images/logo.png'




const Footer = () => {
  return (
    <div className='Main-footer'>
      <div className='footer'>
      <div className = "shopie">
      <p>
      <FaCartPlus style={{fontSize:"40px",color:"white"}} /> <span className='styled-shopie'><img src={logo} alt="logo" /></span>
      </p>
       <p>All in one WooCommerce Theme is a specific, <br/>
        clean, minimal and ultimate theme.</p> 
      <p><FaPhone style={{fontSize:"20px",color:"red"}}/> <span className='numbers'>(1800) 88-66-991</span></p>  
        <p>947 Clear Point, Western Sahara, Los Angelis <br/> info@example.com</p>
      </div>
      <div className = "products">
      <h2>PRODUCTS</h2>
         <ul>
            <a href='cameras'>Cameras</a> <br/>
            <a href='cameras'>Video Cameras</a> <br/>
            <a href='cameras'>Lenses</a> <br/>
            <a href='cameras'>Ink, Toner & Paper</a> 
         </ul>
      </div>
      <div className = "services">
      <h2>SERVICES</h2>
         <ul>
            <li><a href='cameras'>Apps</a></li>
            <li><a href='cameras'>Services</a></li>
            <li><a href='cameras'>Photo Books</a></li>
            <li><a href='cameras'>Lifecake</a></li>
         </ul>
      </div>
      <div className = "accept-payment">
        <h2>PAYMENTS</h2>
        <p className='payment-images'>
        <FaCreditCard style={{marginRight:"10px", color:"red" ,fontSize:"25px"}}/>
        <FaCreditCard style={{marginRight:"10px", color:"orange" ,fontSize:"25px"}}/>
        <FaCreditCard style={{marginRight:"10px", color:"blue" ,fontSize:"25px"}}/>
        <FaCreditCard style={{marginRight:"10px", color:"aqua" ,fontSize:"25px"}}/>
        <FaCreditCard style={{color:"red" ,fontSize:"25px"}}/>
        </p>
        <h2>FOLLOW US</h2>
        <p className='payment-social-links'>
        <FaFacebook style={{marginRight:"10px", color:"red" ,fontSize:"25px"}}/> 
        <FaTwitter style={{marginRight:"10px", color:"red" ,fontSize:"25px"}}/>
        <FaYoutube style={{marginRight:"10px", color:"red" ,fontSize:"25px"}}/>
        <FaInstagram style={{marginRight:"10px", color:"red" ,fontSize:"25px"}}/>   
        </p>

      </div>
      </div>
      {/* <hr/> */}
        <div className='hr-text'>
            <p>Copyright &copy; 2022 <span>Shopic</span>  All rights Reservd</p>
        </div>
    </div>
  )
}

export default Footer
