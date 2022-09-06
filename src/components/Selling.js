import React from 'react'
import img9 from '../images/img9.jpeg'
import img11 from '../images/img11.jpeg'
import img7 from '../images/img7.jpg'
const BestSelling = () => {
  return (
    <div className='selling'>
      <div className='categories2'>
              <div className='categories2-item1'> 
                   <div>
                       <h2 className='categories2-h2'>Fresh <br/> Vegetables</h2>
                      <p className='categories2-p'>-15% off</p>
                      <button className='categories2-btn'>Shop Now</button>
                    </div>
                 <img src= {img7} alt ="bag"/>
                </div>      
              <div className='categories2-item2'>
              <div>
                       <h2 className='categories2-h2'>Fresh <br/> Vegetables</h2>
                      <p className='categories2-p'>-15% off</p>
                      <button className='categories2-btn'>Shop Now</button>
                    </div>
                 <img src= {img11} alt = "bag" />
                </div>      
              <div className='categories2-item3'>
              <div>
                       <h2 className='categories2-h2'>Fresh <br/> Vegetables</h2>
                      <p className='categories2-p'>-15% off</p>
                      <button className='categories2-btn'>Shop Now</button>
                    </div>
                 <img src= {img9} alt = "bag" />
                 </div>      
    </div>
    </div>
  )
}

export default BestSelling
