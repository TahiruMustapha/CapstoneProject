import React from 'react'
//import Nav from '../components/Nav';
import '../styles/Contact.css'
import { FaRegAddressCard } from 'react-icons/fa';
import { FaPhone} from 'react-icons/fa';
import { FaVoicemail } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';
import Footer from '../components/Footer';
 import map from '../images/map.png'
const Contact = () => {
  return (
    <div className='contact'>
      <div className='main-contact'>
    
      
   <div className='contact-details'>
    <h1>We Are Here To Help</h1>
      <img src={map} alt='map'/>
     <p> I’m a team player, comfortable with responsibilities and keen 
             to rise to the top. I have a disciplined and organised approach
              towards my work, time conscious, as well as dependable, self-motivated
               and flexible.My calm attitude with clients and experience in Informationwork, time conscious, as well as dependable, self-motivated
               and flexible.
      </p>
       {/* <img/> */}
       </div>
      <div className='send-message'>
           <div>
              <h2>Send Us Message</h2>
               <p>I’m a team player, comfortable with responsibilities and keen 
             to rise to the top. I have a disciplined and organised approach
              towards my work</p>
              <form>
                <input type='text' placeholder='Your Name'  />
                <input type='email' placeholder='Your Email'  />
                <textarea placeholder='Message'/>
                <button type='submit'>Send Message</button>
              </form>
              </div>
           
            <div className='address'>
                <div className='address-item1'>
                  <div>
                    <FaRegAddressCard style={{color:"#090b32",fontSize:"40px"}}/>
                    </div>
                    <div>
                      <h4>Address</h4>
                      <p>148 SugarHill st TUC <br/> 
                      YM 12343</p>
                    </div>
                </div>
                <div className='address-item1'>
                    <div>
                       <FaPhone style={{color:"#090b32",fontSize:"40px"}}/>
                    </div>
                     <div>
                         <h4>Phone</h4>
                         <p>+233556230613  <br/> +233546789023</p>
                      </div>
                    </div>
                  
                <div className='address-item1'>
                <FaVoicemail style={{color:"#090b32",fontSize:"40px"}}/>
                    <div>
                      <h4>Email</h4>
                      <p>alpha-r234@gmail.com</p>
                      
                    </div>
                </div>
                <div className='address-item1'>
                  <div>
                  <FaClock style={{color:"#090b32",fontSize:"40px"}}/>
                  </div>
                    <div>
                      <h4>Business Hours</h4>
                      <p>Mon-Sat:10:00 AM - 5:00 PM</p>
                    </div>
                </div>
                </div>
            </div>
      </div>
      <Footer/>
      </div>
   
  )
}

export default Contact
