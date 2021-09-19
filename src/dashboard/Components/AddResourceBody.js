import React from 'react'
import { Form,Button } from 'react-bootstrap';
import Select from 'react-select';
const AddResourceBody = () => {
  const options2=[

    { value: '1', label: 'Gynaecologist' }

    ]
    return (
        <div className="mx-5">
            <h1>New Audio Video</h1>
            <Form className="m-5 w-50">
                 <Form.Group>
                     <Form.Label>Specialization:</Form.Label>
                 <Select options={options2}>
  <option value="1">Gynaecologist</option>
 
</Select>
                 </Form.Group>
            
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" />
          
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formFile">
          <Form.Label>File URL</Form.Label>
          <Form.Control type="text" placeholder="http://" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formVideo">
          <Form.Label>Video Url</Form.Label>
          <Form.Control type="text" placeholder="http://" />
        </Form.Group>
       
        <Button variant="primary" type="submit">
         Send
        </Button>
      </Form>
        </div> 
    )
}

export default AddResourceBody;
