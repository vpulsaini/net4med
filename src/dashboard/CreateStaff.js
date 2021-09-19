import React from 'react'
import { Row,Col,Container } from 'react-bootstrap'
import Sidebarx from './Components/sidebar'
import CreateStaffBody from './Components/CreateStaffBody'
import HeaderLoggedIn from '../shared/components/HeaderLoggedIn'
import FooterLoggedIn from '../shared/components/FooterLoggedIn'
const CreateStaff = () => {
    return (
        <Container className="pl-0" fluid>
                   <Row>
                <Col  xs={3}>
            <Sidebarx ></Sidebarx>
            </Col>
            <Col xs={9}>
            <HeaderLoggedIn></HeaderLoggedIn>
                <CreateStaffBody></CreateStaffBody>
            </Col>
            </Row>
            <Row>
       <FooterLoggedIn></FooterLoggedIn>
            </Row>
        </Container>
    )
}

export default CreateStaff