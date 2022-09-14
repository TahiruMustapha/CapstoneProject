import React from 'react'
import Home from './Home'
//import HomeNav from './HomeNav'
import Categories from './Categories';
import Trending from './Trending';
import Deals from './Deals';
import Selling from './Selling';
import LatestNews from './LatestNews';
import HomeFooter from './HomeFooter';
const Hero = () => {
  return (
    <div>
    
      <Home/>
      <Categories/> 
        <Trending/>
        <Deals/>
       <Selling/>
       <LatestNews/>
       <HomeFooter/>
    </div>
  )
}

export default Hero
