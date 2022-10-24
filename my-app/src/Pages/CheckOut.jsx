import React from 'react'
import { Button, Container } from 'react-bootstrap'
import {BsWhatsapp} from 'react-icons/bs'
import { useThemeHook } from '../GlobalComponents/ThemeProvider'

const CheckOut = () => {
    const {theme} = useThemeHook();
  return (
    <Container className='py-4 mt-5'>
        <div className='py-4 mt-5 text-center align-items-center'style={{color:'white',height:'100vh'}}>
                <h1 className={`${theme? 'text-light': 'text-light-primary'} my-5 text-center`} > Checkout Currently Under Maintenace</h1>
                <h3 className={`${theme? 'text-light': 'text-light-primary'} my-5 text-center`}  >Contact us below to place order manually</h3>
                <Button href="https://wa.me/message/U2BVV3PZQC5NP1" target='_blank' style={{background:'#fcbc73', outline:'none', border:'1px solid #191659'}} className={`${theme? 'bg-dark-primary text-black':'bg-light-primary' }`}>
                    
                    <BsWhatsapp /> Contact Us</Button>
        </div>
    </Container>
    
      )
}

export default CheckOut