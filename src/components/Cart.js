import React from 'react'
import '../styles/Cart.css'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { FaStar } from "react-icons/fa";
import img23 from '../images/img23.jpeg' 
import img6 from '../images/img6.jpg'
const Cart = () => {
  return (
   
    <div className='main-cart'>
      <div className='cart'>
      <nav>
               <p>Home Page | Cart</p>
           </nav>
           <div className='cart-content'>
                <div className='cart-content-item1'>
                     <div className='cart-content-item1-header'>
                        <ul>
                        <li>PRODUCT</li>
                        <li>PRICE</li>
                        <li>QUANTITY</li>
                        <li>SUBTOTAL</li>
                        </ul>
                     </div>
                     <div className='cart-content-item1-content'>
                        <div className='cart-img-side'>
                           <p>X</p>
                          <img src={img23} alt='perfume'/>
                        </div>
                          <div className='cart-img-description'>
                          <div>
                               <h4>Nice & Quality Product</h4>
                              <p>Vendor: <span>Shopic</span></p>
                          </div>
                          <p className='cart-price1'>GHS213.2</p>
                          <input type='number'/>
                          <p className='cart-price2'>GHS213.2</p>
                          </div>
                         
                     </div>
                     <div className='update-cart'>
                           <div>
                            <input type='text' placeholder='Coupon Code'  />
                            <button>Apply Coupon</button>
                           </div>
                           <div>
                           <button id='update-cart-btn'>Update Cart</button>
                           </div>
                     </div>
                </div>
                <div className='cart-content-item2'>
                     <h3>CART TOTALS</h3>
                     <div className='cart-content-item2-div1'>
                        <p>Subtotal</p>
                        <p>GHS234.4</p>
                     </div>
                     <div className='cart-content-item2-div2'>
                        <p>Total</p>
                        <p>GHS534.4</p>
                     </div>
                     <button id='proceed-payment'><Link to='checkout'>Proceed To Checkout</Link></button>
                </div>
           </div>
      </div>
      <div className='interested'>
          <h2>You May Also Be Interested in...</h2>
          <div>
            <img src={img6} alt = "pefume"/> <br/>
            <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <p>Perfume</p>
                    <h4>Ergonomic Granite Bench Spray</h4>
                    <p className='spray-price'>GHS567.34</p>
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Cart
