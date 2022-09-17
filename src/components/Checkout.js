import React from 'react'
import '../styles/Checkout.css'
import Footer from './Footer'
import { FaCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Checkout = () => {
  return (
    <div className='main-checkout'>
      <div className='checkout'>
           <nav>
               <p>Home Page | Checkout</p>
           </nav>    
      </div>
      <div className='checkout-bar'>
          <p>Have a coupon? Click here to enter your code</p>
      </div>
      <div className='checkout-content'>
           <div className='checkout-content-item1'>
            <h2>Billing Details</h2>
            <form>
                <div>
                 <p>
                 <label>First Name</label> <br/>
                <input type='text' className='first-name'/>
                  </p> 
                <p>
                <label>Last Name</label> <br/>
                <input type='text'/>
                </p>
                </div>

                <p>
                <label>Company Name (Optional)</label><br/>
                <input type='text'/>
                </p>
                <p>
                <label>Country/Region</label><br/>
                <input type='text'/>
                </p>
                <p>
                <label>Street Address</label><br/>
                <input type='text' placeholder='house number and street name'/>
                </p>
                <p><input type='text' placeholder='apartment, suit ,unit etc. e.g. optional()'/></p>
                <p>
                <label>Town/City</label><br/>
                <input type='text'/>
                </p>
                <p>
                <label>Country (Optional)</label><br/>
                <input type='text'/>
                </p>
                <p>
                <label>Postcode</label><br/>
                <input type='text'/>
                </p>
                <p>
                <label>Phone Number</label><br/>
                <input type='number'/>
                </p>
                <p>
                <label>Email Adddress</label><br/>
                <input type='email'/>
                </p>
                 <h3>Addtion Information</h3> 
                 <p className='optional'>Order Notes (Optional)</p>
                 <textarea placeholder='Notes about your order,e.g. special notes for delivery.'></textarea> 
            </form>
           </div>
           <div className='checkout-content-item2'>
               <h3>Your Order</h3>
               <div className = 'order-d'>
                <p> Product</p>
                <p> Subtotal</p>
               </div>
               <div className = 'order-d'>
                <p>Place Your Design Product</p>
                <p> GHS234.33</p>
               </div>
               <div className = 'vendor'>
                <p>x 1</p>
                <p> Vendor:<span>Shopic</span></p>
               </div>
               <div className = 'order-d'>
                <p>Subtotal</p>
                <p> GHS434.33</p>
               </div>
               <div className = 'order-d'>
                <p>Total</p>
                <p className='total-price'> GHS434.33</p>
               </div>
               <div className = 'vendor'>
                <p><FaCircle style={{color:"gold"}}/> Cash On Delivery</p>
                <p className='cash-upon-delivery'>Pay with cash upon delivery</p>
               </div>
               <p className='vendor-text'>
               Technology ensures I offer a unique contribution to any field that
                 requires my competency with or without any supervision.
                 I have excellent interpersonal communication skills.
                My calm attitude with clients and experience in Informationwork, time conscious, as well as dependable, self-motivated
               and flexible.
               </p>
               <button className='place-order-btn'><Link to ='Order-recieved'>Place Order</Link></button>
           </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Checkout
