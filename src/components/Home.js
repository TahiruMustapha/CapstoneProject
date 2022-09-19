import React from 'react'
import { useState, useEffect } from 'react'
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
import { SliderData } from './SliderData';
//import slider1 from '../SliderImages/slider1.jpg'

import '../styles/Home.css'
import { Link } from 'react-router-dom';
const Home = () => {


  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLenght = SliderData.length;
  //slideLenght = 1,2,3
  const autoScroll = true;
  let slideInterval;
let intervalTime = 5000;
  const nextSlide = () => {
    setCurrentSlide(currentSlide ===slideLenght -1 ? 0 : currentSlide + 1)
  }
  const prevSlide = () => {
    setCurrentSlide(currentSlide ===0? slideLenght - 1: currentSlide - 1)
  }
  function auto (){
    slideInterval  = setInterval(nextSlide,intervalTime)
  }
  useEffect(()=>{
    setCurrentSlide(0)
  },[])
  useEffect(()=>{
    if(autoScroll){
      auto()
    }
    return ()=> (clearInterval(slideInterval))
  },[currentSlide])
  return (
    <div className="main-home">
      
      <div className = 'home'>
        <FaArrowLeft className='arrow prev' onClick={prevSlide}/>
        <FaArrowRight className='arrow next' onClick={nextSlide}/>

        {SliderData.map((slider,index) =>{
          return(
            <div className={index === currentSlide? "slide current":"slide"} key={index} >
                {index === currentSlide &&(
                  <>
                  <img src= {slider.image} alt='perfume'/>
                     <div className='content'>
                          <h2>{slider.heading}</h2>
                          <p>{slider.desc}</p>
                          <hr/>
                          <button><Link to='/page'>Get Started</Link></button>
                          
                     </div>
                  </>
                  
                )}
            </div>
          )
        })}
        {/* <p>Explore To The New World Of Cosmetics</p>
        <h1>ALPHA-R COSMETICS</h1>
        <h3>On selected fisher & paykel kitchenpackages</h3>
        <button type='submit'>Explore Now</button> */}
        </div>  
    </div>
   
  )
  
}

export default Home
