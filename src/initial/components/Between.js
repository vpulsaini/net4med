import React from 'react'
import { Container,Row,Col,Form,Button ,Image,Table} from 'react-bootstrap'
import './Between.css'
const Between = () => {
    return (
        <Container>

         <Row  >
           <Col md="1"></Col>
          <Col md="5"  sm="6">
          <Row>
          <h2 style={{color:"#4b62c8"}}>Contact</h2>
          </Row>
       
      
             
          <Row>
            <Col xs={1}>
          <Image className="pr-3 py-3 "src= "contact.svg" style={{height:"65px",width:"65px"}}/>
          </Col>
          <Col xs={11}>
          <p className="my-3 ml-3">100,NCL Innovation park,</p>
          <p className="ml-3" >Pashan,Pune</p>
          </Col>
           </Row>
         <Row>
           <Col xs={1}>
          <Image className="pr-3 py-3" src="contact_01.svg" style={{height:"65px",width:"65px"}}/>
           </Col>
                 <Col xs={11}>
          <p className="my-3 ml-3">+91-20-6522-3400</p>
          </Col>
          </Row>
        
          <Row>
            <Col xs={1}>
          <Image className="pr-3 py-3" src="contact_02.svg" style={{height:"65px",width:"65px"}}/>
          </Col>
         <Col xs={11}><p className="my-3 ml-3">Communicate@periwinkletech.com </p>
            </Col>
                   </Row>
         
          
          <Row> 
            <Col xs={1}>
  <Image className="pr-3 py-3" src="contact_03.svg" style={{height:"65px",width:"65px"}}/>
  </Col>
      <Col xs={11}>  <p className="my-3 ml-3" >http://www.periwinkletech.com </p></Col>
      </Row>

          
       
          </Col>
          <Col md="5" sm="6" >
          <Form className="xyzw ">
  <Form.Group className="mb-3 " controlId="formBasicEmail">
 <h2  style={{color:"#4b62c8"}}>Get in touch with us</h2>
    <Form.Label className="mt-3">Email address</Form.Label>
    <Form.Control style={{height:"32px"}} type="email" placeholder="Enter email" />
    
  </Form.Group>
  <Form.Group className="mb-2" controlId="formBasicName">
    <Form.Label>Your Name</Form.Label>
    <Form.Control style={{height:"32px"}} type="text" placeholder="Enter Name" />
  </Form.Group>
<Row >
    <Col >
  <Form.Group className="mb-2" controlId="formBasicPhone">
    <Form.Label>Phone</Form.Label>
    <Form.Control style={{height:"32px"}} type="text" placeholder="phone" />
  </Form.Group>
  </Col>
  <Col >
  <Form.Group className="mb-2" controlId="formBasicCity">
    <Form.Label>City</Form.Label>
    <Form.Control style={{height:"32px"}} type="text" placeholder="city" />
  </Form.Group>
  </Col>
  </Row>
  <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your Comments or query</Form.Label>
    <Form.Control style={{height:"76px"}} as="textarea" rows={3} />
  </Form.Group>
  <Form.Group className="mb-2" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Send me a copy of my responses" />
  </Form.Group>

  <Button className="mt-2" variant="primary" type="submit" >
    Submit
  </Button>
</Form>
          </Col>
<Col md="1"></Col>
         </Row>

        </Container>
    )
}

export default Between
