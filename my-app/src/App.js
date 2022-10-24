import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './GlobalComponents/ThemeProvider';
import Header from './Components/Header';
import { Router } from '@reach/router';


import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Footer from './Components/Footer';

const App = () => {
  const{theme} = useThemeHook();
  return (
    <main className={theme? 'bg-black': 'bg-light-2'} style={{height: '100vh', overflowY:'auto'}}>
      <Header />
      <Router>
        <Home path='/' />
        <Cart path='/cart'/>
        {/* <Footer path='/footer'/> */}
      </Router>
      <Footer />
      
    </main>
  )
}

export default App 