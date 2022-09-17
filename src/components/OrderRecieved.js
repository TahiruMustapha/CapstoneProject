import React from 'react'
import '../styles/OrderRecieved.css'
import Footer from './Footer'
const OrderRecieved = () => {
  return (
    <div className='main-order-recieved'>
           <div className='order-recieved'>
           <nav>
               <p>Home Page | Order recieved</p>
           </nav> 
           </div>
              <div className='recieved-message'>
                    <h4>Thank you. Your Order has been recieved</h4>
             </div>
            <div className='recieved-message-item'>
                <div className='message-details'>
                    <p className='order-value2'>Order number:</p>
                    <p className='order-value1'>543</p>
                </div>
                <div className='message-details'>
                    <p className='order-value2'>Date:</p>
                    <p className='order-value1'>Augest 24,2022</p>
                </div>
                <div className='message-details'>
                    <p className='order-value2'>Total:</p>
                    <p className='order-value1'>GHS574.3</p>
                </div>
                <div className='message-details'>
                    <p className='order-value2'>Payment Method:</p>
                    <p className='order-value1'>Cash on delivery</p>
                </div>
            </div>
            <p className='p-cash-upon'>Pay with cash upon delivery.</p>
              <div className='main-order-details'>
                  <h2>ORDER DETAILS</h2>
              </div >
              <div className='order-details'>

              
              <div className = 'order-d'>
                <p>Product</p>
                <p>Total</p>
              </div>
              <div>
                <div className = 'order-d'>
                    <div className = 'order-d-vendor'>
                    <p>Place Your Design Product</p>
                <p>Vendor:Shopic</p>
                    </div>
                    <p>GHS675.34</p>
                </div>
              
              </div>
              <p className='order-detail-text'>Hello from the alpha-r group,we greet y'all. Bye bye</p>
              <div className = 'order-d'>
                <p>Subtotal</p>
                <p>Total</p>
              </div>
              <div className = 'order-d'>
                <p>Payment mode</p>
                <p>Cash on delivery</p>
              </div>
              <div className = 'order-d-base'>
                <p>Total</p>
                <p className='total-price' >GHS678.32</p>
              </div>
              </div>
                <Footer/>
    </div>
  )
}

export default OrderRecieved
