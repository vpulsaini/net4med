import React from 'react'
import { Card,Button ,Row,Col,Accordion} from 'react-bootstrap'
import Sidebarx from './sidebar'
const AllPatientsActionBody = () => {
    return (
        <div style={{width:"90%"}}>
    
     
          <Row>
          <Accordion defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                               View Participant Member
                            </Accordion.Toggle>

                            <Accordion.Collapse aria-expanded="true" className="collapse-in" eventKey="0">
                                <Card.Body>
                                <Card.Title>Card Title</Card.Title>
    <Card.Text>
     Registration ID:
    </Card.Text>
    <Card.Text>
     Name:Olive NKhan
    </Card.Text>
    <Card.Text>
     Engagement:Gynaecologist Consultation
    </Card.Text>
    <Card.Text>
    Registered Number:
    </Card.Text>
    <Card.Text>
    Primary Phone:
    </Card.Text>
    <Card.Text>
    Mobile Number:
    </Card.Text>
    <Card.Text>
      Contact Number:
    </Card.Text>
    <Card.Text>
      Landline Number:
    </Card.Text>
    <Card.Text>
      Email:
    </Card.Text>
    <Card.Text>
      Address:
    </Card.Text>
    <Card.Text>
      Remarks:
    </Card.Text>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                Conversations
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                <Card.Title>Card Title</Card.Title>
    <Card.Text>
     Doctor:
    </Card.Text>
    <Card.Text>
     Additional Doctor:
    </Card.Text>
    <Card.Text>
     Nurse:
    </Card.Text>
    <Card.Text>
    Announcements/Group Chat Validity:
    </Card.Text>
    <Card.Text>
    Primary Phone:
    </Card.Text>
  
   

                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="2">
                                Gynaec History
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                <Card.Title>Gynaec history</Card.Title>
    <Card.Text>
     Menarche At:-
    </Card.Text>
    <Card.Text>
     Last Menstruation:
    </Card.Text>
    <Card.Text>
     Menopause At:
    </Card.Text>
    <Card.Text>
    Ange at first pregnancy:
    </Card.Text>
    <Card.Text>
    Number of pregnancy:
    </Card.Text>
    <Card.Text>
    Number of deliveries:
    </Card.Text>
    <Card.Text>
    Number of abortions:
    </Card.Text>
    <Card.Text>
    C-section:
    </Card.Text>
    <Card.Text>
    Hysterectomy done?:
    </Card.Text>
    <Card.Text>
   Condition Type
    </Card.Text>
    <Card.Text>
Ailing since when
    </Card.Text>
    <Card.Text>
How was it diagnosed?
    </Card.Text>
    <Card.Text>
Family History
    </Card.Text>
    <Card.Text>
Current Oral Medication
    </Card.Text>
    <Card.Text>
Current Other Medication
    </Card.Text>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="3">
                                    More About You
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="3">
                                <Card.Body>    <Card.Title>More About You</Card.Title>
    <Card.Text>
    Tobacco use:
    </Card.Text>
    <Card.Text>
    Alcohol use:
    </Card.Text>
    <Card.Text>
    For birth control:
    </Card.Text>
    <Card.Text>
    Any other Ailment:
    </Card.Text>
    <Card.Text>
    Any other major surgery:
    </Card.Text>
    <Card.Text>
    Wake up at :
    </Card.Text>
    <Card.Text>
    Go to bed At :
    </Card.Text>
    <Card.Text>
    Stress Level :
    </Card.Text>
    <Card.Text>
    Habits :
    </Card.Text>
    <Card.Text>
    Activity Level-Hours per week
    </Card.Text></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
            <Col>
         
                            
     
</Col>


</Row>
<Button className="my-3" variant="primary">Print Report</Button>

        </div>
    )
}

export default AllPatientsActionBody
