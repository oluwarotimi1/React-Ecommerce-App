import React from 'react'
import './footer.css'
import { Link } from '@reach/router'
// import {FaFacebookF} from 'react-icons/fa'
// import { FiInstagram } from 'react-icons/fi'
// import {IoLogoTwitter} from 'react-icons/io'
import { useThemeHook } from '../GlobalComponents/ThemeProvider'
import './Header'

const Footer = () => {
    const {theme} = useThemeHook();
  return (
    <footer className={theme? 'bg-light-black text-light':'bg-light text-black'}>
      <a href="https://timmy-portfolio.netlify.app/" target='_blank' className='footer__logo' >Timmy-Crown.jsx</a>

      <ul className="permalinks">
        <li> <a href="/">Home</a> </li>
        <li> <a href="/about">About</a> </li>
        <li> <a href="/cart">Produts</a> </li>
        <Link to='/contact'> <a href="https://timmy-portfolio.netlify.app/#contact" target='_blank'>Contact</a> </Link>
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