import React from 'react'
import { Row,Col,Container } from 'react-bootstrap'
import Sidebarx from './Components/sidebar'
import NewSpecialityBody from './Components/NewSpecialityBody'
import HeaderLoggedIn from '../shared/components/HeaderLoggedIn'
import FooterLoggedIn from '../shared/components/FooterLoggedIn'
const NewSpeciality = () => {
    return (
        <Container className="pl-0" fluid>
                        <Row>
                <Col  xs={3}>
            <Sidebarx ></Sidebarx>
            </Col>
            <Col xs={9}>
            <HeaderLoggedIn></HeaderLoggedIn>
                <NewSpecialityBody></NewSpecialityBody>
            </Col>
            </Row>
            <Row>
       <FooterLoggedIn></FooterLoggedIn>
            </Row>
        </Container>
    )
}

export default NewSpeciality