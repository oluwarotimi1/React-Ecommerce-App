import React from 'react'
import './footer.css'
// import {FaFacebookF} from 'react-icons/fa'
// import { FiInstagram } from 'react-icons/fi'
// import {IoLogoTwitter} from 'react-icons/io'
import { useThemeHook } from '../GlobalComponents/ThemeProvider'

const Footer = () => {
    const {theme} = useThemeHook();
  return (
    <footer className={theme? 'bg-light-black text-light':'bg-lihgt text-black'}>
      <a href="https://timmy-portfolio.netlify.app/" target='_blank' className='footer__logo' >TimmyCrown.jsx</a>

      <ul className="permalinks">
        <li> <a href="#">Home</a> </li>
        <li> <a href="#about">About</a> </li>
        <li> <a href="#services">Services</a> </li>
        <li> <a href="https://timmy-portfolio.netlify.app/#contact" target='_blank'>Contact</a> </li>
      </ul>
{/* 
      <div className="footer__socials">
        <a href=""><FaFacebookF /></a>
        <a href=""><FiInstagram /></a>
        <a href=""><IoLogoTwitter /></a>
      </div> */}
      <div className="footer__copyright">
        <small>&copy; Oluwarotimi Tech. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer