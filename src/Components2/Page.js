import React from 'react'
import '../styles/Blog.css'
//import { FaBlog } from 'react-icons/fa';
//import Nav from '../components/Nav';
//import Footer from '../components/Footer';
//import Blog from '../Components2/Blog'
import { FaOpencart } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
//import Nav from '../components/Nav';
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.png'
import img12 from '../images/img12.jpeg'
import img13 from '../images/img13.jpeg'
import img9 from '../images/img9.jpeg'
import img11 from '../images/img11.jpeg'
import img19 from '../images/img19.png'
import img20 from '../images/img20.jpeg'
import img21 from '../images/img21.jpeg'
import img22 from '../images/img22.jpeg'
import img23 from '../images/img23.jpeg'
import Footer from '../components/Footer';
const Page = () => {
  return (
    <div>
       
    <div className='mainblog'>
        <div className='blog'>
        <nav>
               <p>Home Page | Page</p>
           </nav>
        </div>
        <div className='blog-content'>
          <div className='blog-content1'>
            <div>
            <h1>Page Categories</h1>
              <ul>
                <li>Make Up(6)</li>
                <li>Make Up pencil(5)</li>
                <li>Make Up pencil(5)</li>
                <li>Make Up pencil(5)</li>
                <li>Make Up pencil(5)</li>
                <li>Make Up pencil(5)</li>
              
                <li>Make Up pencil(5)</li>
                <li>Make Up pencil(5)</li>
                <li>Make Up pencil(5)</li>
                <li>Make Up pencil(5)</li>
                <li>Make Up pencil(5)</li>
                <li>Make Up pencil(5)</li>
                <li>Make Up pencil(5)</li>
                <li>Make Up pencil(5)</li>
                <li>Make Up pencil(5)</li>
                <li>Make Up pencil(5)</li>
                 
              </ul>
              </div>
              <div className='blog-filter'>
                   <h3>Filter By Price</h3>
                    <range></range>
                 <div>
                    <p>price:<span>GHS0-GHS966</span></p>
                    <p>Filter</p>
               </div>
             </div> 
             <div className='product-tag'>
              <h3>Products Tags</h3>
              <div>
                <p>MakeUp Pen</p>
                <p>MakeUp Pen</p>
                <p>MakeUp Pen</p>
                <p>MakeUp Pen</p>
                <p>MakeUp Pen</p>
                <p>MakeUp Pen</p>
              </div>
              </div> 
          </div>
          <div className='blog-content2'>
            <div className='blog-content2-header'>
              <div>
                  <FaOpencart style={{backgroundColor:"gold",padding:'10px',marginRight:'10px'}}/>
                  <FaOpencart style={{border:'1px solid lightgray',padding:'10px',marginRight:'10px'}}/>
                  <p className='sorting'>Default Sorting</p>
                  <p className='showing-results'>Showing 1-12 of 18 result</p>
              </div>
              <div>
                <span className='span-number1'>1</span>
                <span className='span-number2'>2</span>
                < FaGreaterThan style={{fontSize:"10px",marginLeft:'10px'}}/>
              </div>
            </div>
             <div className='blog-content2-items'>
                   <div>
                    <img src={img2} alt='perfume'/> <br/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                     <p>Categories Product</p>
                     <p  className='product-price'><del>GHS42.32</del>  GHS45.32</p>
                   </div>
                   <div>
                    <img src={img3} alt='perfume'/> <br/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                     <p>Categories Product</p>
                     <p  className='product-price'><del>GHS42.32</del>  GHS45.32</p>
                   </div>
                   <div>
                    <img src={img4} alt='perfume'/><br/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                     <p>Categories Product</p>
                     <p  className='product-price'><del>GHS42.32</del>  GHS45.32</p>
                   </div>
                   <div>
                    <img src={img5} alt='perfume'/><br/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                     <p>Categories Product</p>
                     <p  className='product-price'><del>GHS42.32</del>  GHS45.32</p>
                   </div>
                   <div>
                    <img src={img6} alt='perfume'/><br/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                     <p>Categories Product</p>
                     <p  className='product-price'><del>GHS42.32</del>  GHS45.32</p>
                   </div>
                   <div>
                    <img src={img12} alt='perfume'/><br/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                     <p>Categories Product</p>
                     <p  className='product-price'><del>GHS42.32</del>  GHS45.32</p>
                   </div>
                   <div>
                    <img src={img7} alt='perfume'/><br/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                     <p>Categories Product</p>
                     <p  className='product-price'><del>GHS42.32</del>  GHS45.32</p>
                   </div>
                   <div>
                    <img src={img9} alt='perfume'/><br/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                     <p>Categories Product</p>
                     <p  className='product-price'><del>GHS42.32</del>  GHS45.32</p>
                   </div>
                   <div>
                    <img src={img13} alt='perfume'/><br/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                     <p>Categories Product</p>
                     <p  className='product-price'><del>GHS42.32</del>  GHS45.32</p>
                   </div>
                   <div>
                    <img src={img11} alt='perfume'/><br/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                     <p>Categories Product</p>
                     <p  className='product-price'><del>GHS42.32</del>  GHS45.32</p>
                   </div>
                   <div>
                    <img src={img19} alt='perfume'/><br/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                     <p>Categories Product</p>
                     <p  className='product-price'><del>GHS42.32</del>  GHS45.32</p>
                   </div>
                   <div>
                    <img src={img20} alt='perfume'/><br/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                     <p>Categories Product</p>
                     <p  className='product-price'><del>GHS42.32</del>  GHS45.32</p>
                   </div>
                   <div>
                    <img src={img21} alt='perfume'/><br/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                     <p>Categories Product</p>
                     <p  className='product-price'><del>GHS42.32</del>  GHS45.32</p>
                   </div>
                   <div>
                    <img src={img22} alt='perfume'/><br/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                     <p>Categories Product</p>
                     <p  className='product-price'><del>GHS42.32</del>  GHS45.32</p>
                   </div>
                   <div>
                    <img src={img23} alt='perfume'/><br/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                    <FaStar style={{color: 'green', fontSize: '10px',marginRight:"6px",marginTop:"40px"}}/>
                     <p>Categories Product</p>
                     <p className='product-price'><del>GHS42.32</del>  GHS45.32</p>
                   </div>
             </div>
          </div>
        </div>
         
      <Footer/>
    </div>
     
      <Footer/>
    </div>
  )
}

export default Page
