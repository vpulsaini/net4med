import React from 'react'
import FooterLoggedIn from '../shared/components/FooterLoggedIn'
import HeaderLoggedIn from '../shared/components/HeaderLoggedIn'
import CreateFeatUpdateBody from './Components/CreateFeatUpdateBody'
import { Row,Col,Container } from 'react-bootstrap'
import Sidebarx from './Components/sidebar'
const CreateFeatUpdate = () => {
    return (
        <Container className="pl-0" fluid>
                     <Row>
                <Col  xs={3}>
            <Sidebarx ></Sidebarx>
            </Col>
            <Col xs={9}>
            <HeaderLoggedIn></HeaderLoggedIn>
                <CreateFeatUpdateBody></CreateFeatUpdateBody>
            </Col>
            </Row>
            <Row>
       <FooterLoggedIn></FooterLoggedIn>
            </Row>
        </Container>
    )
}
export default CreateFeatUpdate;