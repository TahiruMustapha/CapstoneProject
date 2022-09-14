import React from 'react'
import '../styles/Deals.css'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.jpg'
import img12 from '../images/img12.jpeg'
import img13 from '../images/img13.jpeg'
const Deals = () => {
  return (
    <div className='today-deals'>
        <h1>Today  <span>Deals</span></h1>
        <hr/>
        <div className='Main-deals-box'>
            <div className="today-deals1">
                 <div>
                     <p className="deals-header">Gorgeous Rubber Deal</p>
                     <p>Based on the Splash Screen you have created,
                     design 5 other screens using the following
                     specifications A sign up page containing the following objects:;</p>

                     <p className = "price"><del>$453.45</del><span>$245.23</span></p>
                     <p className='hurry'>Hurry Up! Deals End In: </p>
                     <div className="time">
                        <p><span>423</span>:<br/>Days</p>
                        <p><span>10</span>: <br/>Hours</p>
                        <p><span>23</span>: <br/>Minutes</p>
                        <p><span>28</span>: <br/>Seconds</p>
                     </div>
                   </div>
                 <img  src={img4} alt = "bag"/>
            </div>
            <div className="today-deals2">

            <div>
                    <p className="deals-header">Gorgeous Rubber Deal</p>
                    <p>Based on the Splash Screen you have created,
                     design 5 other screens using the following
                     specifications A sign up page containing the following objects:;</p>

                     <p className = "price"><del>$453.45</del><span>$245.23</span></p>
                     <p className='hurry'>Hurry Up! Deals End In: </p>
                     <div className="time">
                        <p><span>423</span>:<br/>Days</p>
                        <p><span>10</span>: <br/>Hours</p>
                        <p><span>23</span>: <br/>Minutes</p>
                        <p><span>28</span>: <br/>Seconds</p>
                     </div>
                 </div>
                 <img  src={img5} alt = "bag"/>
            </div>
        </div>
         <div className="backgrounds">
             
              <div className='categories2-item-1'> 
                   <div>
                       <h2 className='categories2-h2'>Fresh <br/> Vegetables</h2>
                    </div>
                 <img src= {img7} alt = "bag" />
                </div>  
              <div className='categories2-item-2'> 
                   <div>
                       <h2 className='categories2-h2'>Fresh <br/> Vegetables</h2>
                    </div>
                 <img src= {img6} alt = "bag" />
                </div>  
         </div>
         <div className='products'>
            <div className="products-explore">
                <h4><span> Featured</span> <br/> Products</h4>
                <button>Explore More</button>
            </div>
            <div className='products-table'>
                <div className="left-table">
                     <div className='table-item' id='table-item1'>
                         <img src={img12} alt = "bag"/>
                         <div>
                         <h4>Practical Pepper Plate</h4>
                         <p>$454.98</p>
                          </div>
                     </div>
                     <div className='table-item' id='table-item1'>
                     <img src={img13} alt = "bag"/>
                         <div>
                         <h4>Practical Pepper Plate</h4>
                         <p>$454.98</p>
                          </div>
                     </div>
                     <div className='table-item'>
                     <img src={img2} alt = "bag"/>
                         <div>
                         <h4>Practical Pepper Plate</h4>
                         <p>$454.98</p>
                          </div>
                     </div>

                </div>
          
                <div className="right-table">
                    <div className='table-item' id='table-item1'>
                    <img src={img3} alt = "bag"/>
                         <div>
                         <h4>Practical Pepper Plate</h4>
                         <p>$454.98</p>
                          </div>
                    </div>
                     <div className='table-item' id='table-item1'>
                     <img src={img7} alt = "bag"/>
                         <div>
                         <h4>Practical Pepper Plate</h4>
                         <p>$454.98</p>
                          </div>
                     </div>
                     <div className='table-item' >
                     <img src={img4} alt = "bag"/>
                         <div>
                         <h4>Practical Pepper Plate</h4>
                         <p>$454.98</p>
                          </div>
                     </div>
                </div>
            </div>
         </div>
         <div className="deals-background">
            <div >
            <h3>Herbs and Species</h3>
              <p>Fresh , Flovourful & Aromatic</p>
            </div>
              
         </div>
    </div>
  )
}

export default Deals
