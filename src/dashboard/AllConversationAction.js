import React from 'react'
import { Row,Col,Container } from 'react-bootstrap'
import Sidebarx from './Components/sidebar'
import AllConversationActionBody from './Components/AllConversationsActionBody'
import HeaderLoggedIn from '../shared/components/HeaderLoggedIn'
import FooterLoggedIn from '../shared/components/FooterLoggedIn'
const AllConversationAction = () => {
    return (
        <Container style={{height:'100%',bottom:'0'}} className="pl-0" fluid>
                   <Row>
                <Col  xs={3}>
                    <Row style={{height:"100%",bottom:0,overflowY:'auto'}}>
            <Sidebarx style={{height:'100%',bottom:0}} ></Sidebarx>
            </Row>
            </Col>
            <Col xs={9} >
             
            <HeaderLoggedIn></HeaderLoggedIn>
                <AllConversationActionBody></AllConversationActionBody>
               
                <FooterLoggedIn ></FooterLoggedIn>
              
            </Col>
            
       
            </Row>
        </Container>
    )
}

export default AllConversationAction
