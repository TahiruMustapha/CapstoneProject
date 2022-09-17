import React from 'react'
// import img9 from '../images/img9.jpeg'
// import img11 from '../images/img11.jpeg'
// import img7 from '../images/img7.jpg'
import { FaStar } from "react-icons/fa";
// import img12 from '../images/img12.jpeg'
// import img13 from '../images/img13.jpeg'
import img20 from '../images/img20.jpeg'
import img21 from '../images/img21.jpeg'
import img22 from '../images/img22.jpeg'
import img23 from '../images/img23.jpeg'
const BestSelling = () => {
  return (
    <div className="trending">
    <h1>Best  <span>Selling</span></h1>
      <hr/>
      <div className='trending-items'>
          <div className='trending-items1'>
              <img src={img20} alt='beauty'/>
              <div>
              <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <p>Products</p>
                <h4>Intelligent Marbel Hat</h4>
                <p><del>$5654.09</del> <span>$493/56</span></p>
              </div>
          </div>
          <div className='trending-items2'>
          <button>Sale!</button>
          <img src={img21} alt='beauty'/>
          <div>
          <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <p>Products</p>
                <h4>Intelligent Marbel Hat</h4>
                <p> <del>$5654.09</del> <span>$493/56</span></p>
              </div>
          </div>
          <div className='trending-items3'>
              <button>Sale!</button>
          <img src={img22} alt='beauty'/>
          <div>
          <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <p>Products</p>
                <h4>Intelligent Marbel Hat</h4>
                <p><del>$56.54.09</del> <span>$493/56</span></p>
              </div>
          </div>
          <div className='trending-items4'>
          <img src={img23} alt='beauty'/>
          <div>
          <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                <p>Products</p>
                <h4>Intelligent Marbel Hat</h4>
                <p><del>$5654.09</del> <span>$493/56</span></p>
              </div>
          </div>
      </div>
      </div>
  )
}

export default BestSelling
