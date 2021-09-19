import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const CreateStaffBody = () => {
    return (
        <div>
          <Form className="mx-5">
              <Row>
                  <h1>Create new User</h1>
                  <h3 className="my-3">Create a Staff Member(Advance Setting)</h3>
                  <Col md="2">
              
  <Form.Group className="mb-3" controlId="title">
    <Form.Label>Title</Form.Label>
    <Form.Control as="select">
      <option value="Mr.">Mr.</option>
      <option value="Mrs.">Mrs.</option>
    </Form.Control>
 
  </Form.Group>
  </Col>
  <Col md="5">
              
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
             
              </Form.Group>
              </Col>
              <Col md="5">
              
              <Form.Group className="mb-3" controlId="LastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
             
              </Form.Group>
              </Col>
  </Row>
  <Row>
                  <Col md>
              
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
 
  </Form.Group>
  </Col>
              <Col md>
              
              <Form.Group className="mb-3" controlId="Mobile">
                <Form.Label>Mobile number</Form.Label>
                <Form.Control type="text" placeholder="Enter Mobile Number" />
             
              </Form.Group>
              </Col>
  </Row>
  <Row>
                  <Col md>
              
  <Form.Group className="mb-3" controlId="Role">
    <Form.Label>Role</Form.Label>
    <Form.Control as="select">
      <option value="Doctor">Doctor</option>
      <option value="Nurse">Nurse</option>
      <option value="Administrator">Administrator</option>
    </Form.Control>
 
  </Form.Group>
  </Col>
  <Col md>
              
              <Form.Group className="mb-3" controlId="Default Products">
                <Form.Label>Default Products</Form.Label>
                <Form.Control as="select">
      <option value="GC">Gynaecologist Consultation</option>
    </Form.Control>
             
              </Form.Group>
              </Col>
  </Row>
  <Row>
                  <Col md>
              
  <Form.Group className="mb-3" controlId="formemberGroups">
    <Form.Label>Member of Groups</Form.Label>
 
                 <Form.Control as="select">
  <option value="1">Cardiologist</option>
  <option value="2">Dentist</option>
  <option value="3">Diabetologist</option>
  <option value="1">Gynaecologist</option>
  <option value="2">Haemetologist</option>
  <option value="3">Three</option>
  <option value="1">Physician</option>
  <option value="2">Physiotherapist</option>
</Form.Control>

 
  </Form.Group>
  </Col>
  </Row>
  <Row>
                  <Col md>
              
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Consultation Charges</Form.Label>
    <Form.Control type="text" placeholder="Enter Charges" />
 
  </Form.Group>
  </Col>
              <Col md>
              
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Secondary Contact Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Contact number" />
             
              </Form.Group>
              </Col>
  </Row>
  
  <Button variant="success" type="submit">
    Create User
  </Button>
</Form>  
        </div>
    )
}

export default CreateStaffBody

