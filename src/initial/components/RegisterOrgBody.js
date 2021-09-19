import React from 'react'
import { Button, ButtonGroup, Card, Col, Container, Form, FormControl, Image, InputGroup, Row } from 'react-bootstrap'
const RegisterOrgBody = () => {
    return (
        <Container fluid>
            
            
            <Row>
                <Col>
            <Image src="providerk.png" />
            </Col>
            <Col>
            <Card className="mx-5 my-5"style={{ width: '36rem',height:"30rem" }}>

  <Card.Body>
    <Card.Title>Register an organization</Card.Title>
    <Card.Text>
      Default
    </Card.Text>
    <Card.Text>
      Once Someone Registers what should they see?
    </Card.Text>




  <InputGroup className="my-3">
    <InputGroup.Checkbox aria-label="Radio button for following text input" />
    <Form.Label className="mx-3">Hello charu baby</Form.Label>

  </InputGroup>
  <InputGroup className="my-3">
    <InputGroup.Checkbox aria-label="Radio button for following text input" />
    <Form.Label className="mx-3">Hello charu baby</Form.Label>

  </InputGroup>
  <InputGroup className="my-3">
    <InputGroup.Checkbox aria-label="Radio button for following text input" />
    <Form.Label className="mx-3">Hello charu baby</Form.Label>

  </InputGroup>
  <InputGroup className="my-3">
    <InputGroup.Checkbox aria-label="Radio button for following text input" />
    <Form.Label className="mx-3">Hello charu baby</Form.Label>

  </InputGroup>
  <InputGroup className="my-3">
    <InputGroup.Checkbox aria-label="Radio button for following text input" />
    <Form.Label className="mx-3">Hello charu baby</Form.Label>

  </InputGroup>
  <InputGroup className="my-3">
    <InputGroup.Checkbox aria-label="Radio button for following text input" />
    <Form.Label className="mx-3">Hello charu baby</Form.Label>

  </InputGroup>
  <ButtonGroup>
    <Button className="mt-3 "variant="primary">Go somewhere</Button>
    <Button className="mt-3 mx-3"variant="primary">Go somewhere</Button>
    </ButtonGroup>
  </Card.Body>
</Card>
</Col>
</Row>
        </Container>
    )
}

export default RegisterOrgBody
