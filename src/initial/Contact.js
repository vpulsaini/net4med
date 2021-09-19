import React from 'react'
import Header from '../shared/components/Header';
import Footer from '../shared/components/Footer';
import Second from './components/Second';
import { Row,Col,Container } from 'react-bootstrap';
const Contact = () => {
    return (
      <Container fluid className='nopadding'>
        <Row fluid className='nopadding'>
        <Header fluid className='nopadding'></Header>

        </Row>
        <Row fluid className='nopadding'style={{marginBottom:"0px"}}>
        <Second fluid className='nopadding'></Second>
        </Row>
        <Row  fluid className=' nopadding' >
        <Footer  className="nopadding" fluid  ></Footer>
        </Row>
         
         
         
       </Container>
    )
}

export default Contact;

