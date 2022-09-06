

import './App.css';
// import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import Categories from './components/Categories';
import Trending from './components/Trending';
import Deals from './components/Deals';
import Selling from './components/Selling';

function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      <Categories/> 

      <Trending/>
      <Deals/>
      <Selling/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
