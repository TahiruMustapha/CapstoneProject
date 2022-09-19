import React from 'react'
import '../styles/Page.css'
//import { FaOpencart } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaBicycle } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaReply } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

//import Nav from '../components/Nav';
// import img2 from '../images/img2.jpg'
// import img3 from '../images/img3.jpg'
// import img4 from '../images/img4.jpg'
// import img5 from '../images/img5.jpg'
// import img6 from '../images/img6.jpg'
// import img7 from '../images/img7.png'
// import img12 from '../images/img12.jpeg'
// import img13 from '../images/img13.jpeg'
// import img9 from '../images/img9.jpeg'
// import img11 from '../images/img11.jpeg'
// import img19 from '../images/img19.png'
// import img20 from '../images/img20.jpeg'
// import img21 from '../images/img21.jpeg'
// import img22 from '../images/img22.jpeg'
// import img23 from '../images/img23.jpeg'
import Footer from '../components/Footer';
import { BlogData } from '../components/BlogData';
import { Link } from 'react-router-dom';
const Blog = () => {
  return (
    <div className='mainblog'>
        <div className='blog'>
        <nav>
               <p>Home Page | Blog</p>
           </nav>
        </div>
        <div className='main-page'>
          <div className='main-page1'>
            <div className='blog-div'>
                 <div className='blog-item'>
                  <img src='/SliderImages/slider1.jpg' alt='slider'/>
                  <FaClock style={{color:"black",fontSize:"25px" ,marginRight:"20px",marginTop:"20px"}}/>
                  <FaVideo style={{color:"black",fontSize:"25px" ,marginRight:"20px",marginTop:"20px"}}/>
                </div>
                <div className='blog-item'>
                <img src='/SliderImages/slider2.jpg' alt='slider'/>
                </div>
                <div className='blog-item'>
                <img src='/SliderImages/slider10.jpg' alt='slider'/>
                </div>
            </div>
            <div className='blog-div'>
                <div className='blog-item'>
                <img src='/SliderImages/slider4.jpg' alt='slider'/>
                </div>
                <div className='blog-item'>
                <img src='/SliderImages/slider5.jpg' alt='slider'/>
                </div>
                <div className='blog-item'>
                <img src='/SliderImages/slider6.jpg' alt='slider'/>
                </div>
            </div>
               
                
                {/* {BlogData.map((blog,index)=>{
                     return(
                      <div className='blog-images'>
                        
                        <img src={blog.image}/>
                      </div>
                     )
                })} */}
               
          </div>
          <div className='main-page2'>
                   <div>
                    <p className='stock'>IN STOCK</p>
                    <div className='bike-section'>
                      <div className='star-section'>
                      <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
                      <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
                     <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
                     <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
                       <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
                       <p>(5 Customer Reviews)</p>
                      </div>
                         <FaBicycle style={{fontSize:"50px",border:"1px solid rgba(128, 128, 128, 0.212)",
                          padding:"5px 25px"}}/>

                    </div>
                    <h2>Buy Product In Stock With 50% Discount< br/>  On Sales</h2>
                    <p className='stock-price'>GHS234.4</p>
                    <p className='price-text'>
                    Technology ensures I offer a unique contribution to any field that
                 requires my competency with or without any supervision. < br/>
                 I have excellent interpersonal communication skills.
                My calm attitude with clients and experience in Informationwork, time < br/> conscious, as well as dependable, self-motivated
               and flexible.
                    </p>
                    <p className='color'>Color</p>
                    <div className='colors'>
                     <div></div>
                     <div></div>
                     <div></div>
                     <div></div>
                    </div>
                    <div className='cart'>
              <button>- 1 +</button>
              <button><Link to='/cart'>ADD TO CART</Link></button>
              <button><FaRegHeart/></button>
              <button><FaReply/></button>
           
             </div>
             <div className='categories'>
              <p><span>Category:</span> Cosmetics</p>
             <p><span>Share:</span><FaFacebook style={{marginLeft:"15px",color:"#090b32"}}/>
              <FaInstagram style={{marginLeft:"15px",color:"#090b32"}}/>
               <FaTwitter style={{marginLeft:"15px",color:"#090b32"}}/></p> 
             </div>
             <div className='shipping-details'>
              <li>Free global shipping on all orders</li>
              <li>30 days easy return if you change your mind</li>
              <li>Order before noon for same day dispatch</li>
             </div>
             <div>
              <div className='payments'>
              <h5>Guaranteed Safe Checkout<span>
              
              <FaCreditCard style={{marginLeft:"40px", color:"red" ,fontSize:"25px"}}/>
          <FaCreditCard style={{marginLeft:"10px", color:"orange" ,fontSize:"25px"}}/>
          <FaCreditCard style={{marginLeft:"10px", color:"blue" ,fontSize:"25px"}}/>
          <FaCreditCard style={{marginLeft:"10px", color:"aqua" ,fontSize:"25px"}}/>
          <FaCreditCard style={{marginLeft:"10px",color:"red" ,fontSize:"25px"}}/>
                </span> </h5>
              </div>
           
             </div>
                   </div>
                   <div className='more-products'>
                    <p>+Description</p>
                    <p>+Additional Information</p>
                    <p>+Reviews(5)</p>
                    <p>+Vendor Info</p>
                    <p>+More Products</p>
                   </div>
          </div>
          <div className='floating-description'>
        <div className='floating-description-item1'>
       
        <div className='product-img'>
        <img src='/SliderImages/slider19.jpg' alt='slider'/>
           </div>
          <div>
           <p className='view-product'><span>You are viewing:</span> Place Your Design Product</p>
           <p className='product-price'><span>GHS23.34</span>  <del>GHS20.21</del>
           <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
            <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
            <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
            <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
            <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
           </p>
          </div>
        </div>
        <div>
          <button> <Link to='/cart'>Add To Cart</Link></button>
        </div>
       </div>
      
        </div>
        <div className='related-products-section'>
          <h2>Related Products</h2>
                <div className='product-content'>
                  <div className ='related-products-item'>
                       <img src='SliderImages/slider13.jpg' alt='perfume'/>
                       <p>
                        <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
                        <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
                        <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
                        <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
                        <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/><br/>
                        <span className='price-product'>Products</span><br/>
                        <span className='price-incredible'>Incredible Cosmetic Products</span><br/> <br/>
                        <span className='price'>GHS34.4</span>
                       </p>
                  </div>
                  <div className='related-products-items'>
                  <img src='SliderImages/slider14.png' alt='perfume'/>
                  <p>
                        <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
                        <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
                        <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
                        <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
                        <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/><br/>
                        <span className='price-product'>Products</span><br/>
                        <span className='price-incredible'>Incredible Cosmetic Products</span><br/> <br/>
                        <span className='price'>GHS34.4</span>
                        
                       </p>
                  </div>
                  <div className='related-products-items'>
                  <img src='SliderImages/slider17.jpg' alt='perfume'/>
                  <p>
                        <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
                        <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
                        <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
                        <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
                        <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/><br/>
                        <span className='price-product'>Products</span><br/>
                        <span className='price-incredible'>Incredible Cosmetic Products</span><br/> <br/>
                        <span className='price'>GHS34.4</span>
                       </p>
                  </div>
                  <div className='related-products-items'>
                  <img src='SliderImages/slider16.jpg' alt='perfume'/>
                  <p>
                        <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
                        <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
                        <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
                        <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
                        <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/> <br/>
                        <span className='price-product'>Products</span><br/>
                        <span className='price-incredible'>Incredible Cosmetic Products</span><br/> <br/>
                        <span className='price'>GHS34.4</span>
                       </p>
                       
                  </div>
                </div>
       </div>
         
      <Footer/>
    </div>
  )
}

export default Blog
