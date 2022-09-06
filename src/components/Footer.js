import React from 'react'
import '../styles/Footer.css'
import redstar from '../images/redstar.png'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import twitter from '../images/twitter.svg'


const Footer = () => {
  return (
    <div className='Main-footer'>
      <div className='footer'>
      <div className = "shopie">
       <img src= {redstar} alt = "bag" /> <span className='styled-shopie'>Shopie</span>
       <p>All in one WooCommerce Theme is a specific, <br/>
        clean, minimal and ultimate theme.</p> 
        <img src= {redstar} alt = "bag" /> <span className='numbers'>(1800) 88-66-991</span>
        <p>947 Clear Point, Western Sahara, Los Angelis <br/> info@example.com</p>
      </div>
      <div className = "products">
         
         <ul>
         <h2>PRODUCTS</h2>
            <li><a href='cameras'>Cameras</a></li>
            <li><a href='cameras'>Video Cameras</a></li>
            <li><a href='cameras'>Lenses</a></li>
            <li><a href='cameras'>Ink, Toner & Paper</a></li>
         </ul>
      </div>
      <div className = "services">
      
         <ul>
         <h2>SERVICES</h2>
            <li><a href='cameras'>Apps</a></li>
            <li><a href='cameras'>Services</a></li>
            <li><a href='cameras'>Photo Books</a></li>
            <li><a href='cameras'>Lifecake</a></li>
         </ul>
      </div>
      <div className = "accept-payment">
        <h2>ACCEPT PAYMENTS</h2>
        <div className='payment-images'>
        <img src= {redstar} alt = "bag" />
        <img src= {redstar} alt = "bag" />
        <img src= {redstar} alt = "bag" />
        <img src= {redstar} alt = "bag" />
        <img src= {redstar} alt = "bag" />
        </div>
        <h2>FOLLOW US</h2>
        <div className='payment-social-links'>
        <img src={facebook} alt = "facebook"  /> 
        <img src={instagram} alt = "instagram"  /> 
        <img src={twitter} alt = "twitter"  /> 
        </div>

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
