import React from 'react'
import { ListGroup ,Row,Col,Container,Card,Accordion,Button,Form} from 'react-bootstrap'
import Select from 'react-select';
const RegisterConsultationBody = () => {
  const options4=[]
    return (
        <Row>
          <h2>Register for Consultation</h2>
       <Card className="my-3">
  <Card.Header>Registration Details</Card.Header>
  <Card.Body>
    <Form>

    <Row>
                  <Col md="2">
              
  <Form.Group className="mb-3" controlId="title">
    <Form.Label>Payment Method</Form.Label>
    <Select options={options4}>
    <option value="Mr.">Cash</option>
      <option value="Mr.">Card</option>
      <option value="Mrs.">Cheque</option>
    </Select>
 
  </Form.Group>
  </Col>
  <Col md="5">
              
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>ID</Form.Label>
                <Form.Control type="text" placeholder="Enter ID" />
             
              </Form.Group>
              </Col>
              <Col md="5">
              
              <Form.Group className="mb-3" controlId="LastName">
                <Form.Label>Payment</Form.Label>
                <Form.Control type="text" placeholder="Receipt text" />
             
              </Form.Group>
              </Col>
 
      <Form.Group>

      </Form.Group>
    </Row>
    <Row>
    <Form.Group className="mb-3" controlId="title">
    <Form.Label>Select Consultation</Form.Label>
    <Form.Control as="select">
      <option value="Mr.">Gynaecologist Consultation</option>
    </Form.Control>
 
  </Form.Group>
    </Row>
    <Row>
                  <Col md="2">
              
  <Form.Group className="mb-3" controlId="title">
    <Form.Label>Name</Form.Label>
    <Form.Control as="select">
    <option value="Mr.">Mr</option>
      <option value="Mr.">Mrs.</option>
    </Form.Control>
 
  </Form.Group>
  </Col>
  <Col md="5">
              
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter ID" />
             
              </Form.Group>
              </Col>
              <Col md="5">
              
              <Form.Group className="mb-3" controlId="LastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Receipt text" />
             
              </Form.Group>
              </Col>
 
      <Form.Group>

      </Form.Group>
    </Row>
    <Row>
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>Phone text</Form.Label>
                <Form.Control type="text" placeholder="Enter ID" />
             
              </Form.Group>
    </Row>
    <Row>
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter ID" />
             
              </Form.Group>
    </Row>
    <Row>
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" placeholder="Enter ID" />
             
              </Form.Group>
    </Row>
    <Row>
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>Age</Form.Label>
                <Form.Control type="text" placeholder="Enter ID" />
             
              </Form.Group>
    </Row>
    <Row>
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Flat No." />
             
              </Form.Group>
    </Row>
    <Row>
      <Col>
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Control type="text" placeholder="Street" />
             
              </Form.Group>
       </Col>
       <Col>
    <Form.Group className="mb-3" controlId="firstName">
               
                <Form.Control type="text" placeholder="LandMark" />
             
              </Form.Group>
              </Col>
    </Row>
    <Row>
      <Col>
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Control type="number" placeholder="City" />
             
              </Form.Group>
       </Col>
       <Col>
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Control type="number" placeholder="State" />
             
              </Form.Group>
              </Col>
    </Row>
    <Row>
      <Col>
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Control type="number" placeholder="Enter Country" />
             
              </Form.Group>
              </Col>
              <Col>
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Control type="text" placeholder="Enter Pin Code" />
             
              </Form.Group>
              </Col>
    </Row>
    </Form>
   
  </Card.Body>
</Card>

<Card className="my-3">
  <Card.Header>Registration Details</Card.Header>
  <Card.Body>
    <Form>

    <Row>
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>Doctor</Form.Label>
                <Form.Control type="text" placeholder="Flat No." />
             
              </Form.Group>
      </Row>
      <Row>
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>Additional Doctor</Form.Label>
                <Form.Control type="text" placeholder="Flat No." />
             
              </Form.Group>
      </Row>
      <Row>
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>Valid Till</Form.Label>
                <Form.Control type="text" placeholder="Flat No." />
             
              </Form.Group>
      </Row>
      <Row>
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>Announcements/Group Chat/Validity</Form.Label>
                <Form.Control type="text" placeholder="Flat No." />
             
              </Form.Group>
      </Row>
      </Form>
      </Card.Body>
      </Card>
      <Card className="my-3">
  <Card.Header>Gynaec History</Card.Header>
  <Card.Body>
    <Form>

    <Row>
    <Form.Group className="mb-3" controlId="MenarcheAt">
                <Form.Label>Menarche at:-</Form.Label>
                <Form.Control as="select" placeholder="Menarche At" />
             
              </Form.Group>
      </Row>
      <Row>
    <Form.Group className="mb-3" controlId="LastMenstruation">
                <Form.Label>Last Menstruation</Form.Label>
                <Form.Control type="text" placeholder="Last Menstruation" />
             
              </Form.Group>
      </Row>
      <Row>
    <Form.Group className="mb-3" controlId="MenoPause At">
                <Form.Label>Menopause At</Form.Label>
                <Form.Control type="text" placeholder="MenoPause At" />
             
              </Form.Group>
      </Row>
      <Row>
    <Form.Group className="mb-3" controlId="AgeAtFirstPregnancy">
                <Form.Label>Age at First Pregnancy</Form.Label>
                <Form.Control type="text" placeholder="Flat No." />
              </Form.Group>
             
      </Row>
      <Row>
    <Form.Group className="mb-3" controlId="NoofPregnancies">
                <Form.Label>Number of Pregnancies</Form.Label>
                <Form.Control type="text" placeholder="No.of Pregnancies" />
             
              </Form.Group>
      </Row>
      <Row>
    <Form.Group className="mb-3" controlId="NoOfDeliveries">
                <Form.Label>Number of deliveries</Form.Label>
                <Form.Control type="text" placeholder="No. Of Deliveries" />
             
              </Form.Group>
              
      </Row>
      <Row>
    <Form.Group className="mb-3" controlId="FlatNo">
                <Form.Label>Number of Abortions</Form.Label>
                <Form.Control type="text" placeholder="Flat No" />
             
              </Form.Group>
              
      </Row>
      <Row>
    <Form.Group className="mb-3" controlId="CSection">
                <Form.Label>C-Section</Form.Label>
                <Form.Control type="text" placeholder="C-Section" />
             
              </Form.Group>
              
      </Row>
      <Row>
    <Form.Group className="mb-3" controlId="HysterectomyDone">
                <Form.Label>Hysterectomy Done?</Form.Label>
                <Form.Control type="text" placeholder="Hysterectomy Done" />
             
              </Form.Group>
              
      </Row>
      <Row>
    <Form.Group className="mb-3" controlId="Condition">
                <Form.Label>Condition</Form.Label>
                <Form.Control type="text" placeholder="Condition" />
             
              </Form.Group>
              </Row>
              <Row>
              <Form.Group className="mb-3" controlId="typ">
                <Form.Label>Type</Form.Label>
                <Form.Control type="text" placeholder="Type" />
             
              </Form.Group>
              
      </Row>
      <Row>
              <Form.Group className="mb-3" controlId="Ailing Since When">
                <Form.Label>Ailing Since When:</Form.Label>
                <Form.Control type="text" placeholder="Ailing since when" />
             
              </Form.Group>
              
      </Row>
      <Row>
              <Form.Group className="mb-3" controlId="HowwasitDiagnosed">
                <Form.Label>How was it Diagnosed</Form.Label>
                <Form.Control type="text" placeholder="How Was it Diagnosed" />
             
              </Form.Group>
              
      </Row>
      <Row>
              <Form.Group className="mb-3" controlId="currentOralMedication">
                <Form.Label>Current Oral Medication</Form.Label>
                <Form.Control type="text" placeholder="Current Oral Medication" />
             
              </Form.Group>
              
      </Row>
      <Row>
              <Form.Group className="mb-3" controlId="currentOtherMedication">
                <Form.Label>Current other Medication</Form.Label>
                <Form.Control type="text" placeholder="Current Other Medication" />
             
              </Form.Group>
              
      </Row>
      <Row>
              <Form.Group className="mb-3" controlId="familyhistory">
                <Form.Label>Family History</Form.Label>
                <Form.Control type="text" placeholder="Family History" />
             
              </Form.Group>
              
      </Row>
      </Form>
      </Card.Body>
      </Card>
      <Card className="my-3">
  <Card.Header>More About You</Card.Header>
  <Card.Body>
    <Form>

    <Row>
    <Form.Group className="mb-3" controlId="TobaccoUse">
                <Form.Label>Tobacco use:</Form.Label>
                <Form.Control type="text" placeholder="Tobacco Use" />
             
              </Form.Group>
      </Row>
      <Row>
    <Form.Group className="mb-3" controlId="AlcoholUse">
                <Form.Label>Alcohol Use:</Form.Label>
                <Form.Control type="text" placeholder="Alcohol Use" />
             
              </Form.Group>
      </Row>
      <Row>
    <Form.Group className="mb-3" controlId="ForBirthControl">
                <Form.Label>For Birth Control</Form.Label>
                <Form.Control type="text" placeholder="For Birth Control" />
             
              </Form.Group>
      </Row>
      <Row>
    <Form.Group className="mb-3" controlId="MajorSurgery">
                <Form.Label>Any other Major Surgery</Form.Label>
                <Form.Control type="text" placeholder="Any Other Major Surgery" />
             
              </Form.Group>
      </Row>
      <Row>
    <Form.Group className="mb-3" controlId="Anyotherailment">
                <Form.Label>Any other ailment</Form.Label>
                <Form.Control type="text" placeholder="Any other ailment" />
             
              </Form.Group>
      </Row>
      <Row>
    <Form.Group className="mb-3" controlId="Wakeupat">
                <Form.Label>Wake up at</Form.Label>
                <Form.Control type="text" placeholder="Wake up at" />
             
              </Form.Group>
      </Row>
      <Row>
    <Form.Group className="mb-3" controlId="Goestobedat">
                <Form.Label>Goes to bed  at</Form.Label>
                <Form.Control type="text" placeholder="Goes to bed at" />
             
              </Form.Group>
      </Row>
      <Row>
    <Form.Group className="mb-3" controlId="StressLevel">
                <Form.Label>Stress Level</Form.Label>
                <Form.Control type="text" placeholder="Stress Level" />
             
              </Form.Group>
      </Row>
      <Row>
    <Form.Group className="mb-3" controlId="Habits">
                <Form.Label>Habits</Form.Label>
                <Form.Control type="text" placeholder="Habits" />
             
              </Form.Group>
      </Row>
      <Row>
    <Form.Group className="mb-3" controlId="ActivityLevel">
                <Form.Label>Activity Level-Hours per Week</Form.Label>
                <Form.Control type="text" placeholder="Hours per week" />
             
              </Form.Group>
      </Row>
      </Form>
      <Button variant="primary">Submit</Button>
      </Card.Body>
      
      </Card>
      
</Row>
    )
}

export default RegisterConsultationBody
