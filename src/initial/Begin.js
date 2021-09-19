import React from 'react'
import {Row,Col,Container} from 'react-bootstrap';
import Header from '../shared/components/Header';
import Footer from '../shared/components/Footer';
import Content from './components/Content';
const Begin = () => {
    return (
        <div>

            <Container fluid className="mr-0">
            <Row>
            <Header></Header>
            </Row>
            
                <Row>
                    <Content></Content>
                </Row>
                <Row >
            <Footer></Footer>
            </Row>
            </Container>
          
            
      
       
        </div>
    )
}

export default Begin
