import React from 'react'
import { Row,Col,Container } from 'react-bootstrap'
import Sidebarx from './Components/sidebar'
import AddResourceBody from './Components/AddResourceBody'
import HeaderLoggedIn from '../shared/components/HeaderLoggedIn'
import FooterLoggedIn from '../shared/components/FooterLoggedIn'
const AddResource = () => {
    return (
        <Container className="pl-0" fluid>
            
            <Row>
                <Col  xs={6} md={6} lg={3}>
            <Sidebarx ></Sidebarx>
            </Col>
            <Col xs={6} md={6} lg={9}>
            <HeaderLoggedIn></HeaderLoggedIn>
                <AddResourceBody></AddResourceBody>
            </Col>
            </Row>
            <Row>
       <FooterLoggedIn></FooterLoggedIn>
            </Row>
        </Container>
    )
}

export default AddResource