import React from 'react'
import '../styles/SingleProductsPage.css'
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaReply } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img6 from '../images/img6.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img20 from '../images/img20.jpeg'
import img21 from '../images/img21.jpeg'
import img22 from '../images/img22.jpeg'
import img23 from '../images/img23.jpeg'
//import { FaGreaterThan } from "react-icons/fa";
//import Footer from '../components/Footer';
import img19 from '../images/img19.jpg'
const SingleProductPage = () => {
  return (
  
    <div className="single-product-page">
       <div className='nav'>
      <p>Home Page|Foods Heavy duty product</p>
       </div>
       <div className='product'>
        <div className='product-img'>
          <img src={img19} alt='product' />
          <div><FaPlayCircle style={{fontSize:"20px", marginLeft:"10px"}}/></div>
          <div><FaVideo style={{fontSize:"20px", marginLeft:"10px"}}/></div>
          
          <div className='products-sections'>
            <div><img src={img2} alt='product' /></div>
            <div><img src={img3} alt='product' /></div>
            <div><img src={img4} alt='product' /></div>
            <div><img src={img5} alt='product' /></div>
          </div>
          </div>
        <div className='product-description'>
             <p className='stock'>IN STOCK</p>
           <p >
            <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
            <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
            <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
            <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
            <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
            <span className='stars'>(5 customers Reviews)</span></p>
           <h3>Place Your Design Product</h3> 
           <p className='price'><del>GHS123.54</del> <span>GHS11.34</span></p>
           <div className='days-left'>
           <div className='hurry'>Hurry Up! Deals end on:</div>
           <div className='days'>
            <div>360 <br/> Days</div>
            <div>06 <br/> Hours</div>
            <div>41 <br/> Min</div>
            <div>51 <br/> Secs</div>
            </div>
           </div>
           <p className='Product-quality'>This product has helped many of our customers. I think <br/>
             you should try it</p>
             <div className='cart'>
              <button>- 1 +</button>
              <button>ADD TO CART</button>
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
       </div>
       <div className='floating-description'>
        <div className='floating-description-item1'>
       
        <div className='product-img'>
           <img src={img19} alt='product' />
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
          <button>Add To Cart</button>
        </div>
       </div>
       {/* <hr className='last-hr'/> */}
       <div className='descriptions'>
         <div className='description-nav'>
            <ul>
                <li>Description</li>
                <li>Reviews(5)</li>
                <li>Vendor Info</li>
                <li>More Products</li>
           </ul>
          </div>
          <div className='description-content1'>
             <p>
             I’m a team player, comfortable with responsibilities and keen 
             to rise to the top. I have a disciplined and organised approach
              towards my work, time conscious, as well as dependable, self-motivated
               and flexible.My calm attitude with clients and experience in Informationwork, time conscious, as well as dependable, self-motivated
               and flexible.  
                <br/>
                <br/>
                Technology ensures I offer a unique contribution to any field that
                 requires my competency with or without any supervision.
                 I have excellent interpersonal communication skills.
                My calm attitude with clients and experience in Informationwork, time conscious, as well as dependable, self-motivated
               and flexible.
             </p>
          </div>
       </div>
       <div className='product2'>
        <img src={img6} alt='perfume'/>
        <div className='product-feature1'>
          <h2>Product Features</h2>
          <div>
            <h3><span>01</span> SUPER LIGHT</h3>
            <p>
            Technology ensures I offer a unique contribution to any field that
                 requires my competency with or without any supervision.
                 I have excellent interpersonal communication skills.
                My calm attitude with clients and experience in Informationwork, time conscious, as well as dependable, self-motivated
               and flexible. 
            </p>
          </div>
          <div>
            <h3><span>01</span>PRECISION</h3>
            <p>
            Technology ensures I offer a unique contribution to any field that
                 requires my competency with or without any supervision.
                 I have excellent interpersonal communication skills.
                My calm attitude with clients and experience in Informationwork, time conscious, as well as dependable, self-motivated
               and flexible. 
            </p>
          </div>
          <div>
            <h3><span>03</span> SMOOTH</h3>
            <p>
            Technology ensures I offer a unique contribution to any field that
                 requires my competency with or without any supervision.
                 I have excellent interpersonal communication skills.
                My calm attitude with clients and experience in Informationwork, time conscious, as well as dependable, self-motivated
               and flexible. 
            </p>
          </div>
          <div></div>
          <div></div>
        </div>
       </div>
       <div className='product-details1'>
          <div className='details1'>
            <h3>Product Details</h3>
            <p>
            Technology ensures I offer a unique contribution to any field that
                 requires my competency with or without any supervision.
                 I have excellent interpersonal communication skills.
                My calm attitude with clients and experience in Informationwork, time conscious, as well as dependable, self-motivated
               and flexible.
            </p>
            <div className='check-tips'>
              <div>
               <li><FaCheck style={{marginRight:"10px", color:"green"}}/>Alpha group cosmetic project with react</li>
               <li><FaCheck style={{marginRight:"10px", color:"green"}}/>Alpha group cosmetic project with react</li>
               <li><FaCheck style={{marginRight:"10px", color:"green"}}/>Alpha group cosmetic project with react</li>
               <li><FaCheck style={{marginRight:"10px", color:"green"}}/>Alpha group cosmetic project with react</li>
               <li><FaCheck style={{marginRight:"10px", color:"green"}}/>Alpha group cosmetic project with react</li>
              
              </div>
              <div>
              <li><FaCheck style={{marginRight:"10px", color:"green"}}/>Alpha group cosmetic project with react</li>
               <li><FaCheck style={{marginRight:"10px", color:"green"}}/>Alpha group cosmetic project with react</li>
               <li><FaCheck style={{marginRight:"10px", color:"green"}}/>Alpha group cosmetic project with react</li>
               <li><FaCheck style={{marginRight:"10px", color:"green"}}/>Alpha group cosmetic project with react</li>
               <li><FaCheck style={{marginRight:"10px", color:"green"}}/>Alpha group cosmetic project with react</li>
              </div>
            </div>
          </div>
          <div className='details2'>
             <div>
              <h3>Size & Fit</h3>
              <p>Model Use:UK 8/EU 36 / US 4</p>
              <p>Model Height: 173.4cm</p>
             </div>
             <div>
             <h3>Features</h3>
              <p>Soft Smell and pleasant</p>
              <p>Model Height: 173.4cm</p>
             </div>
             <div>
             <h3>Texture</h3>
              <p>100% Original</p>
              <p>Model Height: 173.4cm</p>
             </div>
          </div>
       </div>
       <div className='related-products'>
            <h2>Related Products</h2>

            <div className='related-products-items' >
              <div>
                <img src={img20} alt = "pefume" />
                <p>
                <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
            <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
            <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
            <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
            <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
                </p>
                <p>Product Name</p>
                <h5>Check This Out</h5>
                <p>GHS20</p>
              </div>
              <div>
              <img src={img21} alt = "pefume" />
                <p>
                <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
            <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
            <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
            <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
            <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
                </p>
                <p>Product Name</p>
                <h5>Check This Out</h5>
                <p>GHS20</p>
              </div>
              <div>
              <img src={img22} alt = "pefume" />
                <p>
                <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
            <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
            <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
            <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
            <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
                </p>
                <p>Product Name</p>
                <h5>Check This Out</h5>
                <p>GHS20</p>
              </div>
              <div>
              <img src={img23}  alt = "pefume"/>
                <p>
                <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
            <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
            <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
            <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
            <FaStar style={{color: 'green', fontSize: '20px',marginRight:"6px"}}/>
                </p>
                <p>Product Name</p>
                <h5>Check This Out</h5>
                <p>GHS20</p>
              </div>
            </div>
       </div>
       {/* <Footer/> */}
    </div>
  )
}

export default SingleProductPage
