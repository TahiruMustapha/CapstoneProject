import React from 'react'
import Footer from './Footer'
import '../styles/NotFound.css'
import { Link } from 'react-router-dom';
// import 404 from '../images/404.jpg'
const NotFound = () => {
  return (
    <div className="NotFound">
      <div className='error'>
       <button><Link to = '/'>GO TO HOME</Link></button>
       
        
        
      </div>
       
        <Footer/>
    </div>
  )
}

export default NotFound
