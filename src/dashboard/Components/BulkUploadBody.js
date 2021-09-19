import React from 'react'
import { Form,Button } from 'react-bootstrap'
const BulkUploadBody = () => {
    return (
        <Form>
  <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Bulk Upload Excel</Form.Label>
    <Form.Control type="file" />
  </Form.Group>
  <Button variant="primary">Submit</Button>
</Form>
    )
}

export default BulkUploadBody
