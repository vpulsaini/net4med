import React from 'react'
import FooterLoggedIn from '../shared/components/FooterLoggedIn'
import HeaderLoggedIn from '../shared/components/HeaderLoggedIn'
import AllStaffActionBody from './Components/AllStaffActionBody'
import { Row,Col,Container } from 'react-bootstrap'
import Sidebarx from './Components/sidebar'
const AllStaffaction = () => {
    return (
        <Container className="pl-0" fluid>
                      <Row>
                <Col  xs={3}>
            <Sidebarx ></Sidebarx>
            </Col>
            <Col xs={9}>
            <HeaderLoggedIn></HeaderLoggedIn>
                <AllStaffActionBody></AllStaffActionBody>
            </Col>
            </Row>
            <Row>
       <FooterLoggedIn></FooterLoggedIn>
            </Row>
        </Container>
    )
}

export default AllStaffaction
