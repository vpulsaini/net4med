import React from 'react'
import { Card,ListGroup,ListGroupItem,Container } from 'react-bootstrap'
const AllConsultationBody = () => {
    return (
        <div>
            <Container>
           <Card className="mt-5" style={{ width: '65rem' }}>
               <Card.Header>All Consultation Plan</Card.Header>
  <Card.Body>
    <Card.Title>Name</Card.Title>
    <Card.Text>
     Gynaecologist Consultation
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    
    <ListGroupItem>Price:</ListGroupItem>
    <ListGroupItem>Created:</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Edit</Card.Link>
  </Card.Body>
</Card> 
</Container>
        </div>
    )
}

export default AllConsultationBody
