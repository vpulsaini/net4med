import axios from 'axios'
import React,{Component} from 'react'
import { ListGroup ,Row,Col,Container,Card,Accordion,Button,Form} from 'react-bootstrap'
import Select from 'react-select';
export class SubmCopy extends Component{
    constructor(props){
        super(props)
        
        this.state={
gender:'',
name:'',
mobile:'',
yearOfBirth:'',
healthId:'V'
        }
    }
    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler =e =>{
        e.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:4009/v1/search/searchByMobile',this.state).then((response)=>{
            console.log(response.data.healthId);
               this.setState({
            healthId:response.data.healthId
               })
            
        }).catch(error=>{
            console.log(error);
        })
    }
    options4=[
        { value: '11', label: 'Cash' },
        { value: '12', label: 'Card' },
        { value: '13', label: 'Cheque' },
    
      ]
      options11=[
        { value: '14', label: 'Gynaecologist Consultation' },
    
    
      ]
      options12 =[
        {value:'15',label:'Mr'},
        {value:'16',label:'Ms.'}
      ]
       dropdownIndicatorStyles = (base, state) => {
        let changes = {
          // all your override styles
          color: 'black'
        };
        return Object.assign(base, changes);
      };
    
    render(){
        const{gender,name,mobile,yearOfBirth}= this.state;
        return(
            <div>
              <form onSubmit={this.submitHandler}>
                  <div>
                      <input type="text" name="gender" value={gender} onChange={this.changeHandler}/>
                      {this.state.healthId}
                  </div>
                  <div>
                      <input type="text" name="name" value={name} onChange={this.changeHandler}/>
                  </div>
                  <div>
                      <input type="text" name="mobile" value={mobile} onChange={this.changeHandler}/>
                  </div>
                  <div>
                      <input type="text" name="yearOfBirth" value={yearOfBirth} onChange={this.changeHandler}/>
                  </div>
                  <button type="submit">Submit</button>
                  </form> 
                  <Row className="mt-1 mx-1">
   <Form action="../subm.js" method="POST">
   <Row className="mt-1 mx-5">
      <Col md="5">
    <Form.Group className="mb-3" controlId="healthID">
                <Form.Label className="flb">Health ID</Form.Label>
                <Form.Control type="text" placeholder="Enter " name="HID" />
             
              </Form.Group>
              </Col> 
              <Col md="5">
    <Form.Group className="mb-3" controlId="mobileNo">
                <Form.Label className="flb">Mobile Number</Form.Label>
                <Form.Control type="text" placeholder="Enter " name="mobile"/>
             
              </Form.Group>
              </Col>
              <Col md="2">
    <Form.Group controlId="firstName">
   
                <Button variant="primary" style={{marginTop:"30px"}} className="flb">Search
                </Button>
               
             
              </Form.Group>
              </Col>
      </Row>
   </Form>
       <Card style={{border:"none"}} >
       <h2 style={{marginLeft:"60px"}}>Register for Consultation</h2>
  <Card.Header className="mx-5 mt-3" style={{backgroundColor:"white",border:"none",fontWeight:"bold",fontSize:"20px"}}>A.Registration Details</Card.Header>
  <Card.Body className="mx-5">
    <Form>
     
    <Row className="mt-1">
      <Col md="2">
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="flb">ID</Form.Label>
                <Form.Control type="text" placeholder="Enter " />
             
              </Form.Group>
              </Col>
           <Col md="5">
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="flb">Payment Method</Form.Label>
                <Select styles={{dropdownIndicator: this.dropdownIndicatorStyles}} components={{IndicatorSeparator:() => null }}    options={this.options4} id="uyt4">
                
                 

</Select>
             
              </Form.Group>
              </Col>
              <Col md="5">
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="flb">Payment Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Email" />
             
              </Form.Group>
              </Col>
    </Row>
    <Row className="mt-1">
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="flb">Select Consultation</Form.Label>
                <Select styles={{dropdownIndicator: this.dropdownIndicatorStyles}} components={{IndicatorSeparator:() => null }}    options={this.options11} id="uyt11">
                
                 

                </Select>
             
              </Form.Group>

    </Row>
    <Row className="mt-1">
      <Col md="2">
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="flb">Title</Form.Label>
                <Select styles={{dropdownIndicator: this.dropdownIndicatorStyles}} components={{IndicatorSeparator:() => null }}    options={this.options12} id="uyt11">
                
                 

                </Select>
             
              </Form.Group>
              </Col>
           <Col md="5">
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="flb">First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Email" />
             
              </Form.Group>
              </Col>
              <Col md="5">
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="flb">Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Email" />
             
              </Form.Group>
              </Col>
    </Row>
  
  
    <Row className="mt-1">
      <Col>
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="flb">Phone text</Form.Label>
                <Form.Control type="text" placeholder="Enter " />
             
              </Form.Group>
              </Col>
           <Col>
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="flb">Email</Form.Label>
                <Form.Control type="text" placeholder="Enter Email" />
             
              </Form.Group>
              </Col>
    </Row>
    <Row className="mt-1">
      <Col>
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="flb">Contact Number</Form.Label>
                <Form.Control type="text" placeholder="Enter " />
             
              </Form.Group>
              </Col>
           <Col>
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="flb">Landline</Form.Label>
                <Form.Control type="text" placeholder="Enter Email" />
             
              </Form.Group>
              </Col>
    </Row>
    <Row className="mt-1">
      <Col>
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="flb">Date of Birth</Form.Label>
                <Form.Control type="date" placeholder="Enter DOB" />
             
              </Form.Group>
    </Col>
    <Col>
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="flb">Age</Form.Label>
                <Form.Control type="text" placeholder="Enter Age" />
             
              </Form.Group>
              </Col>
    </Row>
    <Row className="mt-1">
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="flb">Address</Form.Label>
                <Form.Control type="text" placeholder="Flat No." />
             
              </Form.Group>
    </Row>
    <Row className="mt-1">
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
    <Row className="mt-1">
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
    <Row className="mt-1">
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

<Card style={{border:"none"}} className="mt-3 mx-1">
  <Card.Header className="mx-5" style={{backgroundColor:"white",border:"none",fontWeight:"bold",fontSize:"20px"}}>B.Conversations</Card.Header>
  <Card.Body className="mx-5">
    <Form>

    <Row className="mt-1">
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="flb">Doctor</Form.Label>
                <Form.Control type="text" placeholder="Flat No." />
             
              </Form.Group>
      </Row>
      <Row className="mt-1">
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="flb">Additional Doctor</Form.Label>
                <Form.Control type="text" placeholder="Flat No." />
             
              </Form.Group>
      </Row>
      <Row className="mt-1">
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="flb">Valid Till</Form.Label>
                <Form.Control type="text" placeholder="Flat No." />
             
              </Form.Group>
      </Row>
      <Row className="mt-1">
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="flb">Announcements/Group Chat/Validity</Form.Label>
                <Form.Control type="text" placeholder="Flat No." />
             
              </Form.Group>
      </Row>
      </Form>
      </Card.Body>
      </Card>
      <Card style={{border:"none"}} className="my-3 mx-1">
  <Card.Header className="mx-5" style={{backgroundColor:"white",border:"none",fontWeight:"bold",fontSize:"20px"}}>C.Gynaec History</Card.Header>
  <Card.Body className="mx-5">
    <Form>

    <Row className="mt-1">
    <Form.Group className="mb-3" controlId="MenarcheAt">
                <Form.Label className="flb">Menarche at:-</Form.Label>
                <Form.Control as="select" placeholder="Menarche At" />
             
              </Form.Group>
      </Row>
      <Row className="mt-1">
        <Col>
    <Form.Group className="mb-3" controlId="LastMenstruation">
                <Form.Label className="flb">Last Menstruation</Form.Label>
                <Form.Control type="text" placeholder="Last Menstruation" />
             
              </Form.Group>
     </Col>
     <Col>
    <Form.Group className="mb-3" controlId="MenoPause At">
                <Form.Label className="flb">Menopause At</Form.Label>
                <Form.Control type="text" placeholder="MenoPause At" />
             
              </Form.Group>
              </Col>
      </Row>
      <Row className="mt-1">
        <Col>
    <Form.Group className="mb-3" controlId="AgeAtFirstPregnancy">
                <Form.Label className="flb">Age at First Pregnancy</Form.Label>
                <Form.Control type="text" placeholder="Flat No." />
              </Form.Group>
             
      </Col>
      <Col>
    <Form.Group className="mb-3" controlId="NoofPregnancies">
                <Form.Label className="flb">Number of Pregnancies</Form.Label>
                <Form.Control type="text" placeholder="No.of Pregnancies" />
             
              </Form.Group>
      </Col>
      <Col>
    <Form.Group className="mb-3" controlId="NoOfDeliveries">
                <Form.Label className="flb">Number of deliveries</Form.Label>
                <Form.Control type="text" placeholder="No. Of Deliveries" />
             
              </Form.Group>
             </Col> 
      </Row>
      <Row className="mt-1">
        <Col>
    <Form.Group className="mb-3" controlId="FlatNo">
                <Form.Label className="flb">Number of Abortions</Form.Label>
                <Form.Control type="text" placeholder="Flat No" />
             
              </Form.Group>
              
     </Col>
     <Col>
    <Form.Group className="mb-3" controlId="CSection">
                <Form.Label className="flb">C-Section</Form.Label>
                <Form.Control type="text" placeholder="C-Section" />
             
              </Form.Group>
              
     </Col>
     <Col>
    <Form.Group className="mb-3" controlId="HysterectomyDone">
                <Form.Label className="flb">Hysterectomy Done?</Form.Label>
                <Form.Control type="text" placeholder="Hysterectomy Done" />
             
              </Form.Group>
           </Col>   
      </Row>
      <Row className="mt-1">
        <Col>
    <Form.Group className="mb-3" controlId="Condition">
                <Form.Label className="flb">Condition</Form.Label>
                <Form.Control type="text" placeholder="Condition" />
             
              </Form.Group>
             </Col>
             <Col>
              <Form.Group className="mb-3" controlId="typ">
                <Form.Label className="flb">Type</Form.Label>
                <Form.Control type="text" placeholder="Type" />
             
              </Form.Group>
              </Col>
               <Col>
              <Form.Group className="mb-3" controlId="Ailing Since When">
                <Form.Label className="flb">Ailing Since When:</Form.Label>
                <Form.Control type="text" placeholder="Ailing since when" />
             
              </Form.Group>
              </Col>
      </Row>
      <Row className="mt-1">
        <Col>
              <Form.Group className="mb-3" controlId="HowwasitDiagnosed">
                <Form.Label className="flb">How was it Diagnosed</Form.Label>
                <Form.Control type="text" placeholder="How Was it Diagnosed" />
             
              </Form.Group>
             </Col> 
               <Col>
              <Form.Group className="mb-3" controlId="currentOralMedication">
                <Form.Label className="flb">Current Oral Medication</Form.Label>
                <Form.Control type="text" placeholder="Current Oral Medication" />
             
              </Form.Group>
              </Col>
              <Col>
              <Form.Group className="mb-3" controlId="currentOtherMedication">
                <Form.Label className="flb">Current other Medication</Form.Label>
                <Form.Control type="text" placeholder="Current Other Medication" />
             
              </Form.Group>
              </Col>
      </Row>
      <Row className="mt-1">
              <Form.Group className="mb-3" controlId="familyhistory">
                <Form.Label className="flb">Family History</Form.Label>
                <Form.Control type="text" placeholder="Family History" />
             
              </Form.Group>
              
      </Row>
      </Form>
      </Card.Body>
      </Card>
      <Card style={{border:"none"}} className="mt-3 mx-1">
  <Card.Header className="mx-5"style={{backgroundColor:"white",border:"none",fontWeight:"bold",fontSize:"20px"}}>D.More About You</Card.Header>
  <Card.Body className="mx-5">
    <Form>

    <Row className="mt-1">
      <Col>
    <Form.Group className="mb-3" controlId="TobaccoUse">
                <Form.Label className="flb">Tobacco use:</Form.Label>
                <Form.Control type="text" placeholder="Tobacco Use" />
             
              </Form.Group>
    </Col>
    <Col>
    <Form.Group className="mb-3" controlId="AlcoholUse">
                <Form.Label className="flb">Alcohol Use:</Form.Label>
                <Form.Control type="text" placeholder="Alcohol Use" />
             
              </Form.Group>
     </Col>
      </Row>
      <Row className="mt-1">
        <Col>
    <Form.Group className="mb-3" controlId="ForBirthControl">
                <Form.Label className="flb">For Birth Control</Form.Label>
                <Form.Control type="text" placeholder="For Birth Control" />
             
              </Form.Group>
     </Col>
     <Col>
     
    <Form.Group className="mb-3" controlId="MajorSurgery">
                <Form.Label className="flb">Any other Major Surgery</Form.Label>
                <Form.Control type="text" placeholder="Any Other Major Surgery" />
             
              </Form.Group>
              </Col>
              <Col>
    <Form.Group className="mb-3" controlId="Anyotherailment">
                <Form.Label className="flb">Any other ailment</Form.Label>
                <Form.Control type="text" placeholder="Any other ailment" />
             
              </Form.Group>
              </Col>
      </Row>
      <Row className="mt-1">
        <Col>
    <Form.Group className="mb-3" controlId="Wakeupat">
                <Form.Label className="flb">Wake up at</Form.Label>
                <Form.Control type="text" placeholder="Wake up at" />
             
              </Form.Group>
      </Col>
      <Col>
    <Form.Group className="mb-3" controlId="Goestobedat">
                <Form.Label className="flb">Goes to bed  at</Form.Label>
                <Form.Control type="text" placeholder="Goes to bed at" />
             
              </Form.Group>
      </Col>
      <Col>
    <Form.Group className="mb-3" controlId="StressLevel">
                <Form.Label className="flb">Stress Level</Form.Label>
                <Form.Control type="text" placeholder="Stress Level" />
             
              </Form.Group>
              </Col>
      </Row>
      <Row className="mt-1">
    <Form.Group className="mb-3" controlId="Habits">
                <Form.Label className="flb">Habits</Form.Label>
                <Form.Control type="text" placeholder="Habits" />
             
              </Form.Group>
      </Row>
      <Row className="mt-1">
    <Form.Group className="mb-3" controlId="ActivityLevel">
                <Form.Label className="flb">Activity Level-Hours per Week</Form.Label>
                <Form.Control type="text" placeholder="Hours per week" />
             
              </Form.Group>
      </Row>
      </Form>
      <Form.Group style={{textAlign:"center"}}>
      <Button className="py-1 my-3" style={{width:"200px",textAlign:"center",backgroundColor:"#4b62c8"}}size="lg" variant="primary">Register</Button>
      </Form.Group>
      </Card.Body>
      
      </Card>
      
</Row>
            </div>
        )
    }
}
export default SubmCopy;