import axios from 'axios'
import React,{Component} from 'react'
import { ListGroup ,Row,Col,Container,Card,Accordion,Button,Form} from 'react-bootstrap'
import Select from 'react-select';
export default class GetDetailsNDHMBody extends Component{
    constructor(props){
        super(props)
        
        this.state={
gender:'',
name:'',
mobile:'',
yearOfBirth:'',
healthId:'',
address:'',
dayOfBirth:'',
districtCode:'',
email:'',
firstName:'',
lastName:'',
middleName:'',
monthOfBirth:'',
password:'',
pincode:'',
profilePhoto:'',
restrictions:'',
stateCode:'',
otp:'',
subdistrictCode:'',
townCode:'',
villageCode:'',
wardCode:''

        }
    }
    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler =e =>{
        e.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:4010/v1/search/searchByMobile',this.state).then((response)=>{
            console.log(response.data.healthId);
               this.setState({
            healthId:response.data.healthId
               })
            
        }).catch(error=>{
            console.log(error);
        })
    }
    submitHandler2 =e =>{
      e.preventDefault();
      console.log(this.state);
      axios.post('http://localhost:4009/v1/registration/mobile/generateOtp',this.state).then((response)=>{
          console.log(response.data.healthId);
             this.setState({
          healthId:response.data.healthId
             })
          
      }).catch(error=>{
          console.log(error);
      })
  }
  submitHandler3 =e =>{
    e.preventDefault();
    console.log(this.state);
    axios.post('http://localhost:4009/v1/registration/mobile/verifyOtp',this.state).then((response)=>{
        console.log(response.data.healthId);
           this.setState({
        healthId:response.data.healthId
           })
        
    }).catch(error=>{
        console.log(error);
    })
}
submitHandlerx =e =>{
  e.preventDefault();
  console.log(this.state);
  axios.post('http://localhost:4009/v1/registration/mobile/createHealthId',this.state).then((response)=>{
     
      
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
        const{gender,name,mobile,yearOfBirth,otp,address,dayOfBirth,districtCode,email,firstName,healthId,lastName,middleName,monthOfBirth,password,stateCode}= this.state;
        return(
            <div>
             
                  <Row className="mt-1 mx-1">
   <Form onSubmit={this.submitHandler} method="POST">
   <Row className="mt-1 mx-5">
      <Col md="2">
    <Form.Group className="mb-3" controlId="healthID">
                <Form.Label className="flb">Health ID</Form.Label>
                <Form.Label type="text" name="HID" >{this.state.healthId}</Form.Label>
             
              </Form.Group>
              </Col> 
              <Col md="2">
    <Form.Group className="mb-3" controlId="name">
                <Form.Label className="flb">Name</Form.Label>
                <Form.Control type="text" placeholder="Enter " name="name" value={name} onChange={this.changeHandler}/>
             
              </Form.Group>
              </Col> 
              <Col md="2">
    <Form.Group className="mb-3" controlId="mobileNo">
                <Form.Label className="flb">Mobile Number</Form.Label>
                <Form.Control type="text" placeholder="Enter " name="mobile" value={mobile} onChange={this.changeHandler}/>
             
              </Form.Group>
              </Col>
              <Col md="2">
    <Form.Group className="mb-3" controlId="mobileNo">
                <Form.Label className="flb">Gender</Form.Label>
                <Form.Control type="text" placeholder="Gender" name="gender" value={gender} onChange={this.changeHandler}/>
             
              </Form.Group>
              </Col>
              <Col md="2">
    <Form.Group className="mb-3" controlId="mobileNo">
                <Form.Label className="flb">Year Of Birth</Form.Label>
                <Form.Control type="text" placeholder="Enter Year" name="yearOfBirth" value={yearOfBirth} onChange={this.changeHandler}/>
             
              </Form.Group>
              </Col>
              <Col md="2">
    <Form.Group controlId="Search">
   
                <Button type="submit" variant="primary" style={{marginTop:"30px"}} className="flb">Search
                </Button>
               
             
              </Form.Group>
              </Col>
      </Row>
   </Form>
   <Form onSubmit={this.submitHandler2} method='POST'>
     <Row>
   <Col md="5">
    <Form.Group className="ml-5 mb-3" controlId="mobileNo">
                <Form.Label className="ml-1 flb">Get OTP</Form.Label>
                <Form.Control className="ml-1"type="text" placeholder="Enter Mobile" name="mobile" value={mobile} onChange={this.changeHandler}/>
              
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
   <Form onSubmit={this.submitHandler3} method='POST'>
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
       <h2 style={{marginLeft:"60px"}}>Create New HealthId</h2>
  <Card.Header className="mx-5 mt-3" style={{backgroundColor:"white",border:"none",fontWeight:"bold",fontSize:"20px"}}>Please fill Details</Card.Header>
  <Card.Body className="mx-5">
    <Form onSubmit={this.submitHandlerx} method='POST'>
     
  
  
   
   
    <Row className="mt-1">
    <Col>
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="flb">First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" name="firstName" value={firstName} onChange={this.changeHandler}/>
             
              </Form.Group>
              </Col>
              <Col>
    <Form.Group className="mb-3" controlId="middleName">
                <Form.Label className="flb">Middle Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Middle Name" name="middleName" value={middleName}  onChange={this.changeHandler}/>
             
              </Form.Group>
              </Col>
      <Col>
    <Form.Group className="mb-3" controlId="lastName">
                <Form.Label className="flb">Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter LastName" name="lastName" value={lastName} onChange={this.changeHandler} />
             
              </Form.Group>
    </Col>
  
    </Row>
    <Row className="mt-1">
    <Col>
    <Form.Label className="flb">Name</Form.Label>
    <Form.Group className="mb-3" controlId="Name">
                <Form.Control type="text" placeholder="Name" name="name" value={name} onChange={this.changeHandler} />
             
              </Form.Group>
       </Col>
    <Col>
    <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="flb">Gender</Form.Label>
                <Form.Control type="text" placeholder="Enter Gender" name="gender" value={gender} onChange={this.changeHandler} />
             
              </Form.Group>
              </Col>
              <Col>
    <Form.Group className="mb-3" controlId="Email">
                <Form.Label className="flb">Email</Form.Label>
                <Form.Control type="text" placeholder="Email " name="email" value={email}onChange={this.changeHandler}/>
             
              </Form.Group>
              </Col>

    </Row>
    <Row className="mt-1">
    <Col>
    <Form.Group className="mb-3" controlId="dayOfBirth">
                <Form.Label className="flb">Day Of Birth</Form.Label>
                <Form.Control type="text" placeholder="Day Of Birth" name="dayOfBirth" value={dayOfBirth} onChange={this.changeHandler} />
             
              </Form.Group>
              </Col>
              <Col>
    <Form.Group className="mb-3" controlId="monthOfBirth">
                <Form.Label className="flb">Month Of Birth</Form.Label>
                <Form.Control type="text" placeholder="month Of Birth" name="monthOfBirth" value={monthOfBirth} onChange={this.changeHandler}/>
             
              </Form.Group>
  </Col>
      <Col>
               <Form.Group className="mb-3" controlId="yearOfBirth">
               <Form.Label className="flb">Year Of Birth</Form.Label>
                <Form.Control type="number" placeholder="year Of Birth" name="yearOfBirth" value={yearOfBirth} onChange={this.changeHandler} />
             
              </Form.Group>
       </Col>
    
    </Row>
    <Row>
    <Col>
    <Form.Group className="mb-3" controlId="healthId">
                <Form.Label className="flb">HealthId</Form.Label>
                <Form.Control type="text" placeholder="Enter HealthId" name="healthId" value={healthId} onChange={this.changeHandler} />
             
              </Form.Group>
              </Col>
              <Col>
    <Form.Group className="mb-3" controlId="password">
    <Form.Label className="flb">Password</Form.Label>
                <Form.Control type="text" placeholder="password" name="password" value={password} onChange={this.changeHandler}/>
             
              </Form.Group>
              </Col>
    </Row>
    <Row>
    <Col>
    <Form.Group className="mb-3" controlId="address">
                <Form.Label className="flb">Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" name="address" value={address} onChange={this.changeHandler}/>
             
              </Form.Group>
              </Col>
    </Row>
    <Row className="mt-1">
    <Col md="5">
    <Form.Group className="mb-3" controlId="districtCode">
                <Form.Label className="flb">District Code</Form.Label>
                <Form.Control type="text" placeholder="district Code" name="districtCode" value={districtCode} onChange={this.changeHandler} />
             
              </Form.Group>
              </Col>
              <Col>
              <Form.Label className="flb">State Code</Form.Label>
              <Form.Group className="mb-3 " controlId="State Name">
                <Form.Control type="text" placeholder="Enter State Name" name="stateCode" value={stateCode} onChange={this.changeHandler} />
             
              </Form.Group>
              </Col>
    </Row>
    
    <Form.Group style={{textAlign:"center"}}>
      <Button type="submit" className="py-1 my-3" style={{width:"200px",textAlign:"center",backgroundColor:"#4b62c8"}}size="lg" variant="primary">Create</Button>
      </Form.Group>
      </Form>
  </Card.Body>
</Card>


     
      
      
</Row>
            </div>
        )
    }
}
