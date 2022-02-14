import React from 'react'
import Select from 'react-select';
import './CreateStaffBody.css';
import { Button, Col, Form, Row } from 'react-bootstrap'

const CreateStaffBody = () => {
  const options6 =[
    { value: '1', label: 'Mr.' },
    { value: '2', label: 'Ms.' }


  ]
  const options7=[
    { value: '3', label: 'Doctor' },
    { value: '4', label: 'Nurse' },
    { value: '5', label: 'Administrator' },
  ]
  const options8=[
    {value:'6',label:'Gynaecologist Consultation'}
  ]
  const options9=[
    { value: '7', label: 'Cardiologist' },
    { value: '8', label: 'Dentist' },
    { value: '9', label: 'Diabetologist' },
    { value: '10', label: 'Gynaecologist' },
    { value: '11', label: 'Haemetologist' },
    { value: '12', label: 'Physician' },
    { value: '13', label: 'Physiotherapist' }


  ]
  const dropdownIndicatorStyles = (base, state) => {
    let changes = {
      // all your override styles
      color: 'black'
    };
    return Object.assign(base, changes);
  };
 
    return (
        <div style={{height:"82vh"}}>
          <Form className="mx-5">
              <Row>
                  <h2>Create New User</h2>
                  <h6 style={{color:"grey"}} className="my-2">Create a Staff Member<h6 style={{display:"inline-block",color:"#4b62c8"}}>(Advance Setting)</h6></h6>
                  <Col md="2">
              
  <Form.Group className="mb-3" controlId="title">
    <Form.Label className="flb">Title</Form.Label>
    <Select styles={{dropdownIndicator: dropdownIndicatorStyles}} components={{IndicatorSeparator:() => null }}    options={options6} id="uyt6">
                
                 

</Select>
 
  </Form.Group>
  </Col>
  <Col md="5">
              
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="flb">First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
             
              </Form.Group>
              </Col>
              <Col md="5">
              
              <Form.Group className="mb-3" controlId="LastName">
                <Form.Label className="flb">Last name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
             
              </Form.Group>
              </Col>
  </Row>
  <Row>
                  <Col md>
              
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="flb">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
 
  </Form.Group>
  </Col>
              <Col md>
              
              <Form.Group className="mb-3" controlId="Mobile">
                <Form.Label className="flb">Mobile number</Form.Label>
                <Form.Control type="text" placeholder="Enter Mobile Number" />
             
              </Form.Group>
              </Col>
  </Row>
  <Row>
                  <Col md>
              
  <Form.Group className="mb-3" controlId="Role">
    <Form.Label className="flb">Role</Form.Label>
    <Select styles={{dropdownIndicator: dropdownIndicatorStyles}} components={{IndicatorSeparator:() => null }}   options={options7} id="uyt7">

    </Select>
 
  </Form.Group>
  </Col>
  <Col md>
              
              <Form.Group className="mb-3" controlId="Default Products">
                <Form.Label className="flb">Default Products</Form.Label>
                <Select components={{IndicatorSeparator:() => null }}  styles={{dropdownIndicator: dropdownIndicatorStyles}} options={options8} id="uyt8">
            </Select>
             
              </Form.Group>
              </Col>
  </Row>
  <Row>
                  <Col md>
              
  <Form.Group className="mb-3" controlId="formemberGroups">
    <Form.Label className="flb">Member of Groups</Form.Label>
 
                 <Select components={{IndicatorSeparator:() => null }}  styles={{dropdownIndicator: dropdownIndicatorStyles}} isMulti options={options9} id="uyt9">
</Select>

 
  </Form.Group>
  </Col>
  </Row>
  <Row>
                  <Col md>
              
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="flb">Consultation Charges</Form.Label>
    <Form.Control type="text" placeholder="Enter Charges" />
 
  </Form.Group>
  </Col>
              <Col md>
              
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="flb">Secondary Contact Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Contact number" />
             
              </Form.Group>
              </Col>
  </Row>
  
  <Button  style={{width:"200px"}} className="my-3" variant="success" type="submit">
    Create User
  </Button>
</Form>  
        </div>
    )
}

export default CreateStaffBody

