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
    return (
        <div>
             <Form className="m-5 w-50">
                 <Form.Group>
                     <Form.Label>Specialization: </Form.Label>
                
                 <Select  options={options1} id="uyt">
                
                 

</Select>
                 </Form.Group>
            
        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Enter price" />
          
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicValidity">
          <Form.Label>Validity</Form.Label>
          <Form.Control type="text" placeholder="Validity(days)" />
        </Form.Group>
       
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
        </div>
    )
}

export default NewSpecialityBody
