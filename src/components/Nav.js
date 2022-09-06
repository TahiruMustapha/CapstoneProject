import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import '../styles/Nav.css'
// import redstar from '../images/redstar.png'
 import logo from '../images/logo.png'

const Nav = () => {
  return (
    <div className = "Main-Nav">
         <div className='first-Nav'>
             <p>Free Delivery Over $100 All Products</p>
          <div>
          <FaUser style={{color: 'white', fontSize: '15px'}}/> <a href='sign in'>SIGN IN</a></div>  
         </div>
         <div className='second-Nav' >
            <div className='Nav-shopie'>
            <img src={logo} alt="logo" style={{width:'170px'}}/> <span className='nav-styled-shopie'></span>
            </div>
            <div className=' Nav-search'>
               <input type= "text" placeholder='Search Products'/>
               <span><FaSearch style={{color: '#F94892', fontSize: '30px'}} className = "search"/></span>

            </div>
            <div className='whish-list'>
            < FaRegHeart style={{color: '#F94892', fontSize: '30px' , marginRight:"8px"}} /> <span><p>Whishlist <br/><span>2 items</span></p></span>
            </div>
            <div className='nav-cart'>
            <FaCartPlus style={{color: '#F94892', fontSize: '30px', marginRight:"8px"}}/> <span><p>Cart <br/><span>$0.00</span></p></span>
            </div>
         </div>
         <div className='third-nav'>
               <ul>
                <select>
                    
                    <option className='option-header'>All Department</option>
                    <option><li>Home Audio & Theater</li></option>
                    <option><li>Home Audio & Theater</li></option>
                    <option><li>Home Audio & Theater</li></option>
                    <option><li>Home Audio & Theater</li></option>
                    <option><li>Home Audio & Theater</li></option>
                    <option><li>Home Audio & Theater</li></option>
                    <option><li>Home Audio & Theater</li></option>
                    <option><li>Home Audio & Theater</li></option>
                    <option><li>Home Audio & Theater</li></option>
                    <option><li>Home Audio & Theater</li></option>
                    
                </select>
                <li><a href='home'>HOME+</a></li>
                <li><a href='home'>SHOP+</a></li>
                <li><a href='home'>PAGE+</a></li>
                <li><a href='home'>BLOG+</a></li>
                <li><a href='home'>CONTACT+</a></li>
               </ul>
         </div>
    </div>
  )
}

export default Nav
