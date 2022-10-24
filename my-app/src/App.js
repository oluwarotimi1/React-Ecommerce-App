import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './GlobalComponents/ThemeProvider';
import Header from './Components/Header';
import { Router } from '@reach/router';


import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Footer from './Components/Footer';
import CheckOut from './Pages/CheckOut';
import Contact from './Components/Contact';
import About from './Components/About';

const App = () => {
  const{theme} = useThemeHook();
  return (
    <main className={theme? 'bg-black': 'bg-light-2'} style={{height: '100vh', overflowY:'auto'}}>
      <Header /> 
      <Router>
        <Home path='/' />
        <Cart path='/cart'/>
        <CheckOut path='/cart/checkout'/>
        <Contact path='/contact'/>
        <About path='/about'/>
      </Router>
      <Footer />
      
    </main>
  )
}

export default App 