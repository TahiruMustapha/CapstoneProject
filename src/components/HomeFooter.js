import React from 'react'
import '../styles/HomeFooter.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
const HomeFooter = () => {
  return (
    <div className='main-homeFooter'>
       <div className='homeFooter'>
           <div className ="contact">
            <h3 className="footer-header">Contact Us</h3>
            <ul>
                <li>Box 565</li>
                <li>Whizzy 453</li>
                <li>Box 565</li>
                <li>Whizzy 453</li>
            </ul>
           </div>
           <div className ="support">
           <h3 className="footer-header">Support</h3>
            <p>alpha-rcosmetics@gmail.com</p>
            <p>Phone +2335563468465</p>
             <FaFacebook style={{color:"white"}}/>
             <FaTwitter style={{color:"aqua",marginLeft:"20px"}}/>
             <FaInstagram style={{color:"red",marginLeft:"20px"}}/>
             <FaGoogle style={{color:"red",marginLeft:"20px"}}/>
             <FaPinterest style={{color:"blue",marginLeft:"20px"}}/>
             <FaLinkedin style={{color:"red",marginLeft:"20px"}}/>
           </div>
           <div className ="information">
           <h3 className="footer-header">Information</h3>
           <ul>
            <li>My Account</li>
            <li>Special Products</li>
            <li>Top Rated Products</li>
            <li>Terms & Conditions</li>
           </ul>
           </div>
           <div className ="services">
           <h3 className="footer-header">Our Services</h3>
           <ul>
            <li>Products Brands</li>
            <li>Seller FAQS</li>
            <li>Responsive Design</li>
            <li>Templates Services</li>
           </ul>
           </div>
           <div className ="Quick-links">
           <h3 className="footer-header">Quick Links</h3>
           <ul>
            <li>E-commerce Store</li>
            <li>My Tickets</li>
            <li>Template feature</li>
            <li>Website Quality</li>
           </ul>
           </div>
          
       </div>
    </div>
  )
}

export default HomeFooter
