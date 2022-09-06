import React from 'react'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.jpg'
// import img8 from '../images/img8.jpeg'
import img9 from '../images/img9.jpeg'
import img11 from '../images/img11.jpeg'
import '../styles/Categories.css'
const Categories = () => {
  return (
    <div className="categoris">
        <div className='categoris1'  >
          <h1> Featured <span>Categories</span> </h1>
         <div className='categoris-items'>
            <div className="Main-item1">
              <div className="item1">
                     <img src= {img2} alt = "bag" />
              </div>
              <h3>Morrow</h3>
              <p>17 Products</p>
           </div>
           <div className='Main-item1'>
                <div className="item1">
                  <img src= {img3} alt = "bag" />
                </div>
                <h3>Morrow</h3>
                <p>17 Products</p>
           </div>
           <div className='Main-item1'>
                  <div className="item1">
                      <img src= {img4} alt = "bag" />
                  </div>
                  <h3>Morrow</h3>
                  <p>17 Products</p>
           </div>
           <div className='Main-item1'>
                  <div className="item1">
                      <img src= {img5} alt = "bag" />
                   </div>
                   <h3>Morrow</h3>
                   <p>17 Products</p>
           </div>
           <div className='Main-item1'>
                   <div className="item1">
                        <img src= {img6} alt = "bag" />
                 </div>
                 <h3>Morrow</h3>
                   <p>17 Products</p>
                
           </div>
           <div>
           
           </div>
          </div>
          <div className='categories2'>
              <div className='categories2-item1'> 
                   <div>
                       <h2 className='categories2-h2'>Fresh <br/> Vegetables</h2>
                      <p className='categories2-p'>-15% off</p>
                      <button className='categories2-btn'>Shop Now</button>
                    </div>
                 <img src= {img7} alt = "bag" />
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
    </div>
  )
}

export default Categories
