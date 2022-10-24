import React, { useContext, useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { ThemeContext } from '../GlobalComponents/ThemeProvider';
import {BiSun, BiMoon, BiCart} from 'react-icons/bi'
import {Link} from '@reach/router'
import {useCart} from "react-use-cart"

import './Header.css'


const Header = () => {
    const { theme, setThemeMode } = useContext(ThemeContext); 
    const [darkMode, setDarkMode] = useState(theme);

    useEffect(()=>{
        setThemeMode(darkMode);
        console.log(darkMode)
    },[darkMode]);

    const{ isEmpty, totalItems, }= useCart()

    return (
        <Navbar collapseOnSelect expand="md"
                variant={darkMode? 'dark':'light'}
                className={darkMode? 'bg-light-black border-bottom': 'bg-light border-bottom'}
                style={{ width: '100%', position: 'fixed', zIndex: 100}}
        >
      <Container>
        <Link className={`${darkMode? 'text-dark-primary': 'text-light-primary'} d-flex`} to="/">
            <Navbar.Brand  >
                <b>Shopify</b>
            </Navbar.Brand>
            
            
        </Link>
        <div  className='media-cart'>
              <Link to="/cart"  className={`${darkMode? 'text-dark-primary': 'text-light-primary'}`}>
                <BiCart size='2rem'/>
                {!isEmpty && <span style={{position: 'relative', left:'-21px', top: '-18px'}}>{totalItems}</span>}
                <span style={{marginLeft: !isEmpty? '-13px': 0}}>Cart</span>
            </Link>
            </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link className={darkMode? 'text-dark-primary': 'text-light-primary'} to="/">
             Our Products
            </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className={darkMode? 'text-dark-primary': 'text-light-primary'} to="/">
             Contact Us
            </Link>
            </Nav.Link>
            

            <Nav.Link  className={darkMode? 'text-dark-primary': 'text-light-primary'}
                    onClick={()=>setDarkMode(!darkMode)}
            >
                {darkMode? <BiSun size="1.7rem" />: <BiMoon size="1.7rem" />}
            </Nav.Link>
            <Link to="/cart" className={`${darkMode? 'text-dark-primary': 'text-light-primary'} media-cart-2`}>
                <BiCart size='2rem'/>
                {!isEmpty && <span style={{position: 'relative', left:'-21px', top: '-18px'}}>{totalItems}</span>}
                <span style={{marginLeft: !isEmpty? '-13px': 0}}>Cart</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;