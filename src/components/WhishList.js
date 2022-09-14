import React from 'react'
import '../styles/WhishList.css'
import img20 from '../images/img20.jpeg'
import img21 from '../images/img21.jpeg'
import img22 from '../images/img22.jpeg'
import img23 from '../images/img23.jpeg'
const WhishList = () => {
  return (
    <div className='mainwhish-list'>
        <div className='whish-list'>
           <nav>
               <p>Home Page | WhishList</p>
           </nav>
      </div>
          <div className='item1'>
            <div>
            <div className='img-side'>
                       <p className='cancle'>X</p>
                       <img src={img20} alt='bag'/>
                   </div>
                    <div className='description-side'>
                        <h4>Intelligent Marble Hat</h4>
                         <p>GHS40</p>
                        <p>Augest 24, 2022</p>
                   </div>
            </div>
                  
              
              <div className='left-side-item'>
                 <p>IN STOCK</p>
                 <p>Add To Cart</p>
              </div>
         </div>
         <div className='item1'>
            <div>
            <div className='img-side' >
                       <p className='cancle'>X</p>
                       <img src={img21} alt='bag'/>
                    </div>
                    <div className='description-side'>
                        <h4>Intelligent Marble Hat</h4>
                         <p>GHS40</p>
                        <p>Augest 24, 2022</p>
                   </div>
            </div>
                   
              
              <div className='left-side-item'>
                 <p>IN STOCK</p>
                 <p>Add To Cart</p>
              </div>
              
         </div>
         <div className='item1'>
            <div>
            <div className='img-side'>
                      <p className='cancle'>X</p>
                       <img src={img22} alt='bag'/>
                       </div>
                    <div className='description-side'>
                        <h4>Intelligent Marble Hat</h4>
                         <p>GHS40</p>
                        <p>Augest 24, 2022</p>
                   </div>
            </div>
                 
              
              <div className='left-side-item'>
                 <p>IN STOCK</p>
                 <p>Add To Cart</p>
              </div>
              
         </div>
         <div className='item1'>
            <div>
               <div className='img-side'>
                       <p className='cancle'>X</p>
                        <img src={img23} alt='bag'/>
                </div>
                    <div className='description-side'>
                        <h4>Intelligent Marble Hat</h4>
                         <p>GHS40</p>
                        <p>Augest 24, 2022</p>
                   </div>
            </div>
                  
             
              <div className='left-side-item'>
                 <p>IN STOCK</p>
                 <p>Add To Cart</p>
              </div>
              
         </div>
        
    </div>
  )
}

export default WhishList
