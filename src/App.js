

import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';
// import Hero from './components/Hero';
//import Home from './components/Home';
import Contact from './Components2/Contact';
import Page from './Components2/Page';
import Blog from './Components2/Blog';
import Shop from './Components2/Shop';
import Hero from './components/Hero';
import HomeNav from './components/HomeNav'
import NotFound from './components/NotFound';
import SignIn from './components/SignIn';
import WhishList from './components/WhishList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderRecieved from './components/OrderRecieved';
// import Shop from '../Components2/Shop';
//import Sections from './components/Sections';
//import Nav from './components/Nav';



function App() {
  
  return (
    <BrowserRouter>
    <div>
    <HomeNav/> 
   <Routes>
     <Route  path='/' exact element = { <Hero/> } />
   <Route  path='/shop' exact element = { <Shop/> } />
     <Route  path='/page'  exact element = { <Page/> } />
    <Route  path='/blog' exact element = { <Blog/> } /> 
    <Route  path='/contact' exact element = { <Contact/> } />
    <Route  path='*' exact element = { <NotFound/> } />
    <Route  path='/sign-in' exact element = { <SignIn/> } />
    <Route  path='/whish-list' exact element = { <WhishList/> } />
    <Route  path='/cart' exact element = { <Cart/> } />
    <Route  path='cart/checkout'  element = { <Checkout/> } />
    <Route  path='cart/checkout/Order-recieved'  element = { <OrderRecieved/> } />
    

   </Routes>
   
    
   
    </div>
    </BrowserRouter>
  );
}

export default App;
