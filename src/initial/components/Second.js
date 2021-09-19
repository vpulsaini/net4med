import React from 'react';
import './Second.css';
import {Row,Col,Container,Image,Form,Button} from 'react-bootstrap';

const Second = () => {
    return (
        <Container fluid className='nopadding' >
        <Row className='nopadding' >
      <Col  className='d-none d-md-block pl-0'>
        
        <Image  className = "nopadding " src='providerk.png' alt='Home Page'  />

       
        </Col>
     
    
    
        
            <Col  className="mt-3">
          
              <Form className="p-3 m-2" style={{backgroundColor:"#e6ebfe",borderRadius:"25px"}}>
               
  <Form.Group className=" mt-1 mb-3 " style={{textAlign:"center"}} controlId="formBasicEmail">
 <h3>Register an Organization </h3></Form.Group>
 <Form.Group className="mx-3" >
    <Form.Label className="mt-1">Name of the organization</Form.Label>
    <Form.Control  type="email" placeholder="Enter a unique name" />
    
  </Form.Group>
  
<Row >
    <Col >
  <Form.Group className="mx-3"  controlId="formBasicPassword">
    <Form.Label>Your city</Form.Label>
    <Form.Control  type="text" placeholder="Enter a Location" />
  </Form.Group>
  </Col>
  <Col >
  <Form.Group  className="mx-3" controlId="formBasicPassword">
    <Form.Label>Your Name</Form.Label>
    <Form.Control   type="text" placeholder="Full Name" />
  </Form.Group>
  </Col>
  </Row>
 
   
  <Form.Group className="mx-3"controlId="formBasicPassword">
    <Form.Label>Your Phone</Form.Label>
    <Form.Control  type="text" placeholder="Phone" />
  </Form.Group>
  
  
  <Form.Group className="mx-3" controlId="formBasicPassword">
    <Form.Label>Your Email</Form.Label>
    <Form.Control   type="text" placeholder="Your Email" />
  </Form.Group>
 
  
 
  <Form.Group className="mx-3" style={{textAlign:"center"}}>

  <Button className="px-5 mt-2"  style={{backgroundColor:"#4b62c8"}} variant="primary" type="submit" >
    Next
  </Button>
  
  </Form.Group>
  
  <Form.Group className="mx-3" style={{textAlign:"center"}}>
  <Form.Text style={{color:"#4b62c8",fontSize:"15px"}} >I want to upgrade/extend an existing license</Form.Text>
  </Form.Group>

</Form>

 
      
      </Col>

      </Row>
       </Container>
        
    )
}

export default Second;
