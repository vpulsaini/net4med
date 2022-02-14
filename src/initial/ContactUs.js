import React from 'react'
import Header from '../shared/components/Header';
import Footer from '../shared/components/Footer';
import { Row,Col,Container } from 'react-bootstrap';
import Between from './components/Between';
const ContactUs = () => {
    return (
      <Container fluid >
        <Row >
        <Header></Header>

        </Row>
        <Row style={{marginTop:"30px"}} >
        <Between></Between>
        </Row>
        <Row style={{marginTop:"80px"}}  >
        <Footer  ></Footer>
        </Row>
         
         
         
       </Container>
    )
}

export default ContactUs;