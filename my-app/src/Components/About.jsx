import React from 'react'
import { Container, Form, Row } from 'react-bootstrap'
import { useThemeHook } from '../GlobalComponents/ThemeProvider'

const About = () => {
  const {theme} = useThemeHook();
  
  return (

  <Container className='py-4 mt-5 mb-5'>
    <Row className='py-4 mt-5 mb-5'>
        <h3  style={{color:'white'}}>We Create Exclusive Clothing and Accessories for the Contemporary Community who wants to Command Attention, Feel Different and Stand Out from the Crowd.

<br /><p></p>SHOPIFY IS MADE WITH LOVE
FOR THE CONTEMPORARY COMMUNITY,

FOR THOSE WHO ARE NOT AFRAID TO LOOK BOLD, CONFIDENT AND HAPPY,

FOR THOSE WHO ARE NOT AFRAID TO STAND OUT,

FOR THOSE WHO WANTS TO EXPRESS THEMSELVES,

FOR THOSE WHO WANT TO BE PART OF GREATNESS.

SHOPIFY IS MADE FOR YOU.

</h3>
    </Row>
      
  </Container>
  )
}

export default About