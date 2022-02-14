import axios from 'axios'
import React,{Component} from 'react'
import { ListGroup ,Row,Col,Container,Card,Accordion,Button,Form} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Select from 'react-select';
export default class RegisterNDHMBody extends Component{
    constructor(props){
        super(props)
        
        this.state={
HID:'',
password:'',
HIN:'',
mobile:'',
firstName:'',
middleName:'',
lastName:'',
yearOfBirth:'',
dayOfBirth:'',
monthOfBirth:'',
gender:'',
email:'',
stateName:'',
districtName:'',
address:'',
otp:'',
txnId:'',
healthid:''


        }
    }
    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler5 =e =>{
        e.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:5009/v1/auth/authPassword',this.state).then((response)=>{
           
               this.setState({
            HIN:response.data.healthIdNumber,
            mobile:response.data.mobile,
            firstName:response.data.firstName,
            middleName:response.data.middleName,
            lastName:response.data.lastName,
            yearOfBirth:response.data.yearOfBirth,
            dayOfBirth:response.data.dayOfBirth,
            monthOfBirth:response.data.monthOfBirth,
            gender:response.data.gender,
            email:response.data.email,
            stateName:response.data.stateName,
            districtName:response.data.districtName,
            address:response.data.address
               })
            
        }).catch(error=>{
            console.log(error);
        })
    }
    submitHandler6 =e =>{
      e.preventDefault();
      console.log(this.state);
      axios.post('http://localhost:4008/vill',this.state).then((response)=>{
         
             this.setState({
                 txnId:response.data.txnId
             })
          
      }).catch(error=>{
          console.log(error);
      })
  }
  submitHandler7 =e =>{
    e.preventDefault();
    console.log(this.state);
    axios.post('http://localhost:4008/v1/auth/confirmWithMobileOTP',this.state).then((response)=>{
       
           this.setState({
        HIN:response.data.healthIdNumber,
        mobile:response.data.mobile,
        firstName:response.data.firstName,
        middleName:response.data.middleName,
        lastName:response.data.lastName,
        yearOfBirth:response.data.yearOfBirth,
        dayOfBirth:response.data.dayOfBirth,
        monthOfBirth:response.data.monthOfBirth,
        gender:response.data.gender,
        email:response.data.email,
        stateName:response.data.stateName,
        districtName:response.data.districtName,
        address:response.data.address
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
        const{HID,password,HIN,healthid,otp}= this.state;
        return(
            <div>
             
                  <Row className="mt-1 mx-1">
   <Form onSubmit={this.submitHandler5} method="POST">
   <Row className="mt-1 mx-5">
   <Col md="3">
    <Form.Group className="mb-3" controlId="HID">
                <Form.Label className="flb">Health ID</Form.Label>
                <Form.Control type="text" placeholder="Enter " name="HID" value={HID} onChange={this.changeHandler}/>
             
              </Form.Group>
              </Col>

             <Col md="3">
    <Form.Group className="mb-3" controlId="password">
                <Form.Label className="flb">Password</Form.Label>
                <Form.Control type="password" placeholder="Enter " name="password" value={password} onChange={this.changeHandler}/>
             
              </Form.Group>
              </Col>
              <Col md="3">
    <Form.Group controlId="Search">
   
                <Button type="submit" variant="primary" style={{marginTop:"30px"}} className="flb">Get Details
                </Button>
              </Form.Group>
              </Col>
              <Col md="3">
    <Form.Group className=""controlId="Search">
    <Link to="/getDetailsNDHM">
                <Button type="submit" variant="primary" style={{marginTop:"30px"}} className="flb">Create/Search Health ID
                </Button>
               
             </Link>
              </Form.Group>
              </Col>
      </Row>
      </Form>
      <Form onSubmit={this.submitHandler6} > 
      <Row>
   <Col md="5">
    <Form.Group className="ml-5 mb-3" controlId="healthid">
                <Form.Label className="ml-1 flb">Health Id</Form.Label>
                <Form.Control className="ml-1"type="text" placeholder="Enter Health Id" name="healthid" value={healthid} onChange={this.changeHandler}/>
              
              </Form.Group>
              </Col>
              <Col md="3">
    <Form.Group controlId="Search">
   
                <Button type="submit" variant="primary" style={{marginTop:"30px"}} className="flb">Get OTP
                </Button>
               
             
              </Form.Group>
              </Col>
</Row>
</Form>
<Form onSubmit={this.submitHandler7} >
<Row>
   <Col md="5">
    <Form.Group className="ml-5 mb-3" controlId="otp">
                <Form.Label className="ml-1 flb">Verify OTP</Form.Label>
                <Form.Control className="ml-1"type="text" placeholder="Enter OTP" name="otp" value={otp} onChange={this.changeHandler}/>
              
              </Form.Group>
              </Col>
              <Col md="3">
    <Form.Group controlId="Search">
   
                <Button type="submit" variant="primary" style={{marginTop:"30px"}} className="flb">Verify
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
    <Form.Group className="mb-3" controlId="HIN">
                <Form.Label className="flb">Health ID Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Email" name="HIN" value={HIN} onChange={this.changeHandler}/>
             
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
                <Form.Control type="text" placeholder="First Name" value={this.state.firstName} />
             
              </Form.Group>
              </Col>
              <Col md="5">
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="flb">Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" value={this.state.lastName}/>
             
              </Form.Group>
              </Col>
    </Row>
  
  
    <Row className="mt-1">
      <Col>
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="flb">Phone text</Form.Label>
                <Form.Control type="text" placeholder="Enter " value={this.state.mobile}/>
             
              </Form.Group>
              </Col>
           <Col>
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="flb">Email</Form.Label>
                <Form.Control type="text" placeholder="Enter Email" value={this.state.email}/>
             
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
                <Form.Control type="text" placeholder="Flat No." value={this.state.address} />
             
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
                <Form.Control type="text" placeholder="City" value={this.state.districtName}/>
             
              </Form.Group>
       </Col>
       <Col>
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Control type="text" placeholder="State" value={this.state.stateName} />
             
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
