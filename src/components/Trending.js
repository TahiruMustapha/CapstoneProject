import React from 'react'
import '../styles/Trending.css'
import { FaStar } from "react-icons/fa";
import img12 from '../images/img12.jpeg'
//import img13 from '../images/img13.jpeg'
import img11 from '../images/img11.jpeg'
import img15 from '../images/img15.jpg'
import img6 from '../images/img6.jpg'
const Trending = () => {
  return (
    <div className="trending">
      <h1>Trending  <span>Products</span></h1>
        <hr/>
        <div className='trending-items'>
            <div className='trending-items1'>
                <img src={img12} alt='beauty'/>
                <div>
                <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                  <p>Foods</p>
                  <h4>Intelligent Marbel Hat</h4>
                  <p><del>$5654.09</del> <span>$493/56</span></p>
                </div>
            </div>
            <div className='trending-items2'>
            <button>Sale!</button>
            <img src={img6} alt='beauty'/>
            <div>
            <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                  <p>Foods</p>
                  <h4>Intelligent Marbel Hat</h4>
                  <p> <del>$5654.09</del> <span>$493/56</span></p>
                </div>
            </div>
            <div className='trending-items3'>
                <button>Sale!</button>
            <img src={img11} alt='beauty'/>
            <div>
            <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                  <p>Foods</p>
                  <h4>Intelligent Marbel Hat</h4>
                  <p><del>$56.54.09</del> <span>$493/56</span></p>
                </div>
            </div>
            <div className='trending-items4'>
            <img src={img15} alt='beauty'/>
            <div>
            <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                  <p>Foods</p>
                  <h4>Intelligent Marbel Hat</h4>
                  <p><del>$5654.09</del> <span>$493/56</span></p>
                </div>
            </div>
        </div>
        <div className='trending-bg-img'>
               <p>THE SEASON SALE UP TO 60%</p>
               <h3>Super Handmade</h3>
               <button className='bg-btn'>Shop Now</button>
        </div>
    </div>
  )
}

export default Trending
