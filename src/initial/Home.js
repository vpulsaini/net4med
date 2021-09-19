import React from 'react'
import Header from '../shared/components/Header'
import { Container,Row,Col } from 'react-bootstrap'
import Footer from '../shared/components/Footer'
import Ho from './components/Ho'
const Home = () => {
    return (
        <Container fluid>
            <Row>
        <Header/>
        </Row>
        <Row>
        <Ho />
        </Row>
      
            <Row className="mt-5">
            <Footer />
            </Row>
        
        </Container>
    )
}

export default Home;
