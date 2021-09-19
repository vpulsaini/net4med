import React from 'react'
import './FooterLoggedIn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row,Col,Container,Image} from 'react-bootstrap'
const FooterLoggedIn = () => {
    return (
        <>
        
        <Container className= "pb-0 mb-0"  fluid style={{textAlign:'center',borderTop:"1px solid #cccccc"}}>
 
         <Row >
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
