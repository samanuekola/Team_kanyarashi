import Header from './components/Header';
import './App.css';
import Index from './components/Index';
import Footer from './components/Footer';
import Company from './components/Company';
import Products from './components/Products';
import Projects from './components/Projects'
import Services from './components/Services';
import Cart from './components/Cart';
import Captcha from './components/Captcha'
import {useEffect} from 'react'
import { Route, Routes} from 'react-router-dom';
function App() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  
  useEffect(()=>{
    window.addEventListener("scroll", reveal);
  },[])
  return (
    <div>
      <Header/>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/company' element={<Company/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path="/captcha" element={<Captcha/>}></Route>
        </Routes>
    <Footer/>
    </div>
    
  );
}

export default App;
