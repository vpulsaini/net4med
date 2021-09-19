import React from 'react'
import { Row,Col,Container } from 'react-bootstrap'
import Sidebarx from './Components/sidebar'
import AllFeatUpdateBody from './Components/AllFeatUpdateBody'
import HeaderLoggedIn from '../shared/components/Header'
import FooterLoggedIn from '../shared/components/FooterLoggedIn'
const AllFeatUpdate = () => {
    return (
        <Container className="pl-0" fluid>
                   <Row>
                <Col  xs={3}>
            <Sidebarx ></Sidebarx>
            </Col>
            <Col xs={9}>
            <HeaderLoggedIn></HeaderLoggedIn>
                <AllFeatUpdateBody></AllFeatUpdateBody>
            </Col>
            </Row>
            <Row>
       <FooterLoggedIn></FooterLoggedIn>
            </Row>
        </Container>
    )
}

export default AllFeatUpdate