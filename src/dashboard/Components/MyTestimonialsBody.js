import React from 'react'
import { Container,Card,ListGroup,ListGroupItem } from 'react-bootstrap'
const MyTestimonialsBody = () => {
    return (
        <div>
            <Container>
           <Card className="mt-5" style={{ width: '65rem' }}>
               <Card.Header>Testimonial History</Card.Header>
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

export default MyTestimonialsBody
