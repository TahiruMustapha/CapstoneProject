import React from 'react'
// import img9 from '../images/img9.jpeg'
// import img11 from '../images/img11.jpeg'
// import img7 from '../images/img7.jpg'
import { FaStar } from "react-icons/fa";
import img12 from '../images/img12.jpeg'
import img13 from '../images/img13.jpeg'
const BestSelling = () => {
  return (
    <div className="trending">
    <h1>Best  <span>Selling</span></h1>
      <hr/>
      <div className='trending-items'>
          <div className='trending-items1'>
              <img src={img12} alt='beauty'/>
              <div>
              <FaStar style={{color: '#F94892', fontSize: '30px'}}/>
                <FaStar style={{color: '#F94892', fontSize: '30px'}}/>
                <FaStar style={{color: '#F94892', fontSize: '30px'}}/>
                <FaStar style={{color: '#F94892', fontSize: '30px'}}/>
                <FaStar style={{color: '#F94892', fontSize: '30px'}}/>
                <p>Foods</p>
                <h4>Intelligent Marbel Hat</h4>
                <p><del>$5654.09</del> <span>$493/56</span></p>
              </div>
          </div>
          <div className='trending-items2'>
          <button>Sale!</button>
          <img src={img12} alt='beauty'/>
          <div>
                <FaStar style={{color: '#F94892', fontSize: '30px'}}/>
                <FaStar style={{color: '#F94892', fontSize: '30px'}}/>
                <FaStar style={{color: '#F94892', fontSize: '30px'}}/>
                <FaStar style={{color: '#F94892', fontSize: '30px'}}/>
                <FaStar style={{color: '#F94892', fontSize: '30px'}}/>
                <p>Foods</p>
                <h4>Intelligent Marbel Hat</h4>
                <p> <del>$5654.09</del> <span>$493/56</span></p>
              </div>
          </div>
          <div className='trending-items3'>
              <button>Sale!</button>
          <img src={img12} alt='beauty'/>
          <div>
          <FaStar style={{color: '#F94892', fontSize: '30px'}}/>
                <FaStar style={{color: '#F94892', fontSize: '30px'}}/>
                <FaStar style={{color: '#F94892', fontSize: '30px'}}/>
                <FaStar style={{color: '#F94892', fontSize: '30px'}}/>
                <FaStar style={{color: '#F94892', fontSize: '30px'}}/>
                <p>Foods</p>
                <h4>Intelligent Marbel Hat</h4>
                <p><del>$56.54.09</del> <span>$493/56</span></p>
              </div>
          </div>
          <div className='trending-items4'>
          <img src={img13} alt='beauty'/>
          <div>
          <FaStar style={{color: '#F94892', fontSize: '30px'}}/>
                <FaStar style={{color: '#F94892', fontSize: '30px'}}/>
                <FaStar style={{color: '#F94892', fontSize: '30px'}}/>
                <FaStar style={{color: '#F94892', fontSize: '30px'}}/>
                <FaStar style={{color: '#F94892', fontSize: '30px'}}/>
                <p>Foods</p>
                <h4>Intelligent Marbel Hat</h4>
                <p><del>$5654.09</del> <span>$493/56</span></p>
              </div>
          </div>
      </div>
      </div>
  )
}

export default BestSelling
