import React from 'react'
import Select from 'react-select'
import { Button, InputGroup } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import  { Input } from 'reactstrap';
const NewSpecialityBody = () => {
  const options1=[

  { value: '1', label: 'Cardiologist' },
  { value: '2', label: 'Dentist' },
  { value: '3', label: 'Diabetologist' },
  { value: '4', label: 'Gynaecologist' },
  { value: '5', label: 'Haemetologist' },
  { value: '6', label: 'Physician' },
  { value: '7', label: 'Physiotherapist' },
  { value: '8', label: 'Other' }
 
  ]
  const dropdownIndicatorStyles = (base, state) => {
    let changes = {
      // all your override styles
      color: 'black'
    };
    return Object.assign(base, changes);
  }
    return (
        <div style={{height:"83vh"}}>
          <h3 className="ml-5">Create a Specialization</h3>
             <Form className="m-5 w-50">
               <Form.Group>
                 <Form.Label className="px-2 py-2" style={{background:"#ececec",width:"70%",fontSize:"20px",borderRadius:"10px"}}>
                   Produt Basics
                 </Form.Label>
               </Form.Group>
                 <Form.Group>
                     <Form.Label>Specialization: </Form.Label>
                
                 <Select styles={{dropdownIndicator: dropdownIndicatorStyles}} components={{IndicatorSeparator:() => null }} options={options1} id="uyt">
                
                 

</Select>
                 </Form.Group>
            
        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="In INR" />
          
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicValidity">
          <Form.Label>Validity(Days)</Form.Label>
          <Form.Control type="text" placeholder="90" />
        </Form.Group>
       
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
        </div>
    )
}

export default NewSpecialityBody
