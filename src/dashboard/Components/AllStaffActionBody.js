import React from 'react'
import { Card,Button } from 'react-bootstrap'
const AllStaffActionBody = () => {
    return (
        <div>
            <Card style={{width:"90%"}}className=" text-left" >
  <Card.Body>
    <Card.Title>Dr.Tech Team(Doctor)</Card.Title>
    <Card.Text>
    Acrive:true
    </Card.Text>
    <Card.Text>
    Gynaecologist Consultation
    </Card.Text>
    <Card.Text>
  Username:tech.team@pwt.com
    </Card.Text>
    <Card.Text>
     Invitation Code:tech.team@pwt.com
    </Card.Text>
    <Card.Text>
      Phone:1234567890
    </Card.Text>
    <Card.Text>
     Email:tech.team@pwt.com
    </Card.Text>
    <Card.Text>
  Member of Teams:
    </Card.Text>
    <Card.Text>
  Skill:
    </Card.Text>
    <Card.Text>
  Experience in:
    </Card.Text>
    <Card.Text>
  Years of Employment:
    </Card.Text>
    <Card.Text>
  Remarks:
    </Card.Text>
    <Button variant="primary">Edit</Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default AllStaffActionBody
