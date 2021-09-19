import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Footer from '../shared/components/Footer'
import Header from '../shared/components/Header'
import RegisterOrgBody from './components/RegisterOrgBody'


const RegisterOrg = () => {
    return (
        <Container fluid>
            <Row>
                <Header />
            </Row>
            <Row>
                <RegisterOrgBody />
            </Row>
            <Row>
                <Footer/>
            </Row>
        </Container>
    )
}

export default RegisterOrg
