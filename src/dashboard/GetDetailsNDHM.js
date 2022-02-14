import React from 'react'
import { Row,Col,Container } from 'react-bootstrap'
import Sidebarx from './Components/sidebar'
import RegisterConsultationBodyCopy from './Components/RegisterConsultationBodycopy'
import HeaderLoggedIn from '../shared/components/HeaderLoggedIn'
import FooterLoggedIn from '../shared/components/FooterLoggedIn'
import GetDetailsNDHMBody from './Components/GetDetailsNDHMBody'
const GetDetailsNDHM = () => {
    return (
        <Container className="pl-0" fluid>
                     <Row>
                <Col  xs={3}>
            <Sidebarx ></Sidebarx>
            </Col>
            <Col xs={9}>
            <HeaderLoggedIn></HeaderLoggedIn>
                <GetDetailsNDHMBody></GetDetailsNDHMBody>
                </Col>
            </Row>
            <Row>
       <FooterLoggedIn></FooterLoggedIn>
            </Row>
        </Container>
    )
}

export default GetDetailsNDHM