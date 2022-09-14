import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../styles/Nav.css'
 import logo from '../images/logo.png'

const Nav = () => {
  return (
    <div className = "Main-Nav">
         <div className='first-Nav'>
             <p>Free Delivery Over $100 All Products</p>
          <div>
          <FaUser style={{color: 'white', fontSize: '15px'}}/> <a href='sign in' style={{color:'#fff'}}>SIGN IN</a></div>  
         </div>
         <div className='second-Nav' >
            <div className='Nav-shopie'>
            <img src={logo} alt="logo" style={{width:'170px'}}/> <span className='nav-styled-shopie'></span>
            </div>
            <div className=' Nav-search'>
               <input type= "text" placeholder='Search Products'/>
               <span><FaSearch style={{color: '#090b32', fontSize: '25px',fontWeight: '100'}} className = "search"/></span>

            </div>
            <div className='whish-list'>
            < FaRegHeart style={{color: '#090b32', fontSize: '30px' , marginRight:"8px"}} /> <span><p>Whishlist <br/><span>2 items</span></p></span>
            </div>
            <div className='nav-cart'>
            <FaCartPlus style={{color: '#090b32', fontSize: '30px', marginRight:"8px"}}/> <span><p>Cart <br/><span>$0.00</span></p></span>
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
                <li><Link to='/'>HOME+</Link></li>
                <li><Link to='shop'>SHOP+</Link></li>
                <li><Link to='page'>PAGE+</Link></li>
                <li><Link to='blog'>BLOG+</Link></li>
                <li><Link to='contact'>CONTACT+</Link></li>
               </ul>
         </div>
    </div>
  )
}

export default Nav
