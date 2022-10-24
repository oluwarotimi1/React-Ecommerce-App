import React from 'react'
import { Container, Form, Row } from 'react-bootstrap'
import { useThemeHook } from '../GlobalComponents/ThemeProvider'
import { Button } from 'react-bootstrap'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  const {theme} = useThemeHook();
  
  return (

  <Container className='py-4 mt-5 mb-5 text-center align-items-center' style={{width:'70%'}}>
    <Row>
    <Form className={`${theme? 'text-light': 'text-light-primary'} my-5 text-center`}>
      <Form.Group className="mb-3 ">
        <Form.Label>Enter Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Full Name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email Address" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Delivery Address</Form.Label>
        <Form.Control type="email" placeholder="Enter Delivery Address" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Contact Us</Form.Label>
        <Form.Control as="textarea" placeholder='What Products do you need? Drop your message here!' rows={3} style={{resize:'none', height:'20vh'}}/>
      </Form.Group>
      <button type='submit' style={{background:'#fcbc73', outline:'none', border:'1px solid #191659'}} className="btn" disabled>Send Message</button>
      <Button href="https://wa.me/message/U2BVV3PZQC5NP1" target='_blank' style={{background:'#fcbc73', outline:'none', border:'1px solid #191659', width:'30%'}} className={`${theme? 'bg-dark-primary text-black':'bg-light-primary' }`}>
                    
                    <BsWhatsapp /> Contact Us</Button>
    </Form>

    
    
    </Row>
      
  </Container>
  )
}

export default Contact