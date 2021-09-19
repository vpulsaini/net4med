import React from 'react'
import { Row,Col,Container } from 'react-bootstrap'
import Sidebarx from './Components/sidebar'
import RegisterConsultationBody from './Components/RegisterConsultationBody'
import HeaderLoggedIn from '../shared/components/HeaderLoggedIn'
import FooterLoggedIn from '../shared/components/FooterLoggedIn'
const RegisterConsultation = () => {
    return (
        <Container className="pl-0" fluid>
                     <Row>
                <Col  xs={3}>
            <Sidebarx ></Sidebarx>
            </Col>
            <Col xs={9}>
            <HeaderLoggedIn></HeaderLoggedIn>
                <RegisterConsultationBody></RegisterConsultationBody>
            </Col>
            </Row>
            <Row>
       <FooterLoggedIn></FooterLoggedIn>
            </Row>
        </Container>
    )
}

export default RegisterConsultation