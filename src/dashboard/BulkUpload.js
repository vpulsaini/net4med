import React from 'react'
import Footer from '../shared/components/FooterLoggedIn'
import HeaderLoggedIn from '../shared/components/HeaderLoggedIn'
import BulkUploadBody from './Components/BulkUploadBody'
import { Row,Col,Container } from 'react-bootstrap'
import Sidebarx from './Components/sidebar'
import FooterLoggedIn from '../shared/components/FooterLoggedIn'
const BulkUpload = () => {
    return (
        <Container className="pl-0" fluid>
                     <Row>
                <Col  xs={3}>
            <Sidebarx ></Sidebarx>
            </Col>
            <Col xs={9}>
            <HeaderLoggedIn></HeaderLoggedIn>
                <BulkUploadBody></BulkUploadBody>
            </Col>
            </Row>
            <Row>
       <FooterLoggedIn></FooterLoggedIn>
            </Row>
        </Container>
    )
}

export default BulkUpload