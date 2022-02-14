import React from 'react'
import Select from 'react-select'
import './CreateFeatUpdateBody.css'
import { Row,Col,Form,Button, ButtonGroup,Input } from 'react-bootstrap'
const CreateFeatUpdateBody = () => {
  const options3=[
    { value: '1', label: 'Gynaecologist Consultation'}
  ]
  const dropdownIndicatorStyles = (base, state) => {
    let changes = {
      // all your override styles
      color: 'black'
    };
    return Object.assign(base, changes);
  };
    return (
        <div >
          <Form className="mb-5 mx-5">
              <Row>
                  <h3 className="my-3">New Featured Update:</h3>
               <h4 style={{color:"grey"}}>New</h4>
              
  <Form.Group className="mb-3" controlId="title">
    <Form.Label className="flb">Title:</Form.Label>
    <Form.Control as="textarea" rows={2}  style={{fontSize:"15px"}} placeholder="Email ID" />
 
  </Form.Group>

 
  </Row>

  <Row>
                  <Col md>
              
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="flb">Start Date</Form.Label>
    <Form.Control type="date" placeholder="Enter Start Date" />
 
  </Form.Group>
  </Col>
              <Col md>
              
              <Form.Group  controlId="Mobile">
                <Form.Label className="flb">End date</Form.Label>
                <Form.Control type="date" placeholder="Enter End Date" />
                <Form.Check  className="mt-1" type="checkbox" style={{fontSize:"15px"}} label="Or Keep Forever" />
              </Form.Group>
              </Col>
  </Row>
  <Row>
              
  <Form.Group style={{marginTop:"-18px"}} controlId="Role">
  <Form.Label className="flb">Published for Groups</Form.Label>
    <Select styles={{dropdownIndicator: dropdownIndicatorStyles}} components={{IndicatorSeparator:() => null }}options={options3}>
      <option value="GC">Gynaecologist Consultation</option>
    </Select>
 
  </Form.Group>

 
  </Row>
  <Row>
 
              
  <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="flb">Detailed Description</Form.Label>
                <Form.Control as="textarea" rows={2} />
             
              </Form.Group>
  
  </Row>

                 
              
              <Row>
                <Form.Group>
                <Form.Label className="flb">Attatchments</Form.Label>
                <div  style={{height:"100px",width:"1030px",border:"2px solid #D4D4D4"}}><div style={{marginTop:"50px"}}class="file_button_container" ><input type="file" /></div></div>
                </Form.Group>
                
              </Row>
  <Row>
  <ButtonGroup className="mt-3" >
  <Button style={{borderRadius:"5px"}} className="mr-3 px-3" variant="success" type="submit">
    Back
  </Button>
  <Button style={{borderRadius:"5px"}} className="mx-3 px-3" variant="success" type="submit">
    Save
  </Button>
  <Button style={{borderRadius:"5px"}} className="mx-3 px-3" variant="success" type="submit">
    Submit for Approval
  </Button>
  <Button style={{borderRadius:"5px"}} className="mx-3 px-3" variant="success" type="submit">
    Approval
  </Button>
  <Button style={{borderRadius:"5px"}} className="mx-3 px-3"variant="success" type="submit">
    Reject
  </Button>
  <Button style={{borderRadius:"5px"}} className="mx-3 px-3" variant="success" type="submit">
    Publish
  </Button>
  </ButtonGroup>
  </Row>
</Form>        
        </div>
    )
}

export default CreateFeatUpdateBody
