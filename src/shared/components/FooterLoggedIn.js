import React from 'react'
import './FooterLoggedIn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row,Col,Container,Image} from 'react-bootstrap'
const FooterLoggedIn = () => {
    return (
        <>
       
        <Container fluid style={{ textAlign:'center',borderTop:"1px solid #cccccc"}}>
 
         <Row className="mt-1" >
             <ul>
         <li>
        &copy;
        Periwinkle Technologies
         </li>
         </ul>
         </Row>
        </Container>
     
 
     
     </>
    )
}

export default FooterLoggedIn
