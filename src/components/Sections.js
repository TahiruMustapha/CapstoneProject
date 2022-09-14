import React from 'react'
 import Shop from '../Components2/Shop';
 import Blog from '../Components2/Blog';
 import Page from '../Components2/Page';
 import Contact from '../Components2/Contact';
 import Nav from './Nav';
 import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';

const Sections = () => {
  return (
    <BrowserRouter>
      <div>
        <Nav/>
       <Routes>
       <Route path='/' element = { <Home/> } />
        <Route path='shop' element = { <Shop/> } />
        <Route path='contact' element = { <Contact/> } />
        <Route path='blog' element = { <Blog/> } />
        <Route path='page' element = { <Page/> } />
       </Routes>
         <Footer/>
      </div>

    </BrowserRouter>
    
  )
}

export default Sections
