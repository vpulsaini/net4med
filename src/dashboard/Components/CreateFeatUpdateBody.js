import React from 'react'
import Select from 'react-select'
import { Row,Col,Form,Button, ButtonGroup } from 'react-bootstrap'
const CreateFeatUpdateBody = () => {
  const options3=[
    { value: '1', label: 'Gynaecologist Consultation'}
  ]
    return (
        <div>
          <Form className="mb-5 mx-5">
              <Row>
                  <h3 className="my-3">New Featured Update:</h3>
            
              
  <Form.Group className="mb-3" controlId="title">
    <Form.Label>Title</Form.Label>
    <Form.Control as="textarea" prows={3} />
 
  </Form.Group>

 
  </Row>
  <Row>
                  <Col md>
              
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Start Date</Form.Label>
    <Form.Control type="date" placeholder="Enter Start Date" />
 
  </Form.Group>
  </Col>
              <Col md>
              
              <Form.Group className="mb-3" controlId="Mobile">
                <Form.Label>End date</Form.Label>
                <Form.Control type="date" placeholder="Enter End Date" />
             
              </Form.Group>
              </Col>
  </Row>
  <Row>
                  <Col md>
              
  <Form.Group className="mb-3" controlId="Role">
    <Form.Label>Published for Groups</Form.Label>
    <Select options={options3}>
      <option value="GC">Gynaecologist Consultation</option>
    </Select>
 
  </Form.Group>
  </Col>
 
  </Row>
  <Row>
 
              
  <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Detailed Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
             
              </Form.Group>
  
  </Row>

                 
              
              <Row>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Attatchments</Form.Label>
                <Form.Control as="textarea" rows={4} />
             
              </Form.Group>
              </Row>
  
  <ButtonGroup>
  <Button className="mx-3" variant="success" type="submit">
    Back
  </Button>
  <Button className="mx-3" variant="success" type="submit">
    Save
  </Button>
  <Button className="mx-3" variant="success" type="submit">
    Submit for Approval
  </Button>
  <Button className="mx-3" variant="success" type="submit">
    Approval
  </Button>
  <Button className="mx-3"variant="success" type="submit">
    Reject
  </Button>
  <Button className="mx-3" variant="success" type="submit">
    Publish
  </Button>
  </ButtonGroup>
</Form>        
        </div>
    )
}

export default CreateFeatUpdateBody
