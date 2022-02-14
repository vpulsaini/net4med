import './Content.css';
import { useState } from 'react';

import React from 'react'
import { Row,Col,Container ,Image,Card,Form,Button} from 'react-bootstrap';
import swal from 'sweetalert';
async function loginUser(param,varam) {
  return fetch(`https://cors-anywhere.herokuapp.com/https://net4medix.com/mmc/match/validateAndFetchSubscriber?uname=${param}&pwd=${varam}`, {
    
   
  })
    .then(data => data.json())
 }
const Content = () => {
  const [uname, setUserName] = useState();
  const [pwd, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser(uname,pwd);
    console.log(response);
    let rex=response.Subscriber;

    if (response&&'Subscriber' in response) {
      swal("Success", response.Subscriber.displayName, "success", {
        buttons: false,
        timer: 2000,
      })
      .then((value) => {
        localStorage.setItem('displayName', response.Subscriber.displayName);
        localStorage.setItem('user', response.Subscriber.displayName);
        // window.location.href = "/conversations";
      })
      console.log('Success');
      alert('Valid username or password');
    } else {
      swal("Failed");
      console.log('Failed');
      alert('Invalid username or password');
    }
  }
    return (
  <Container   fluid className="nopadding" >
     <Row className="nopadding">
     <Col  className="ml-0 mx-md-5" >
    
      
 
      <Card className="mx-0 my-0 mx-md-5 my-md-5" style={{boxShadow:"0 1px 4px rgba(0, 0, 0, 0.2)"}} >
     
      <Form onSubmit={handleSubmit} className="mx-5 mt-3"  >
  
       <h1 className="mt-1">Sign In</h1>
       <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control  type="email" placeholder="someone@example.com"  required onChange={e => setUserName(e.target.value)}/>
    <Form.Text className="text-muted">
  
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Your Password"  required
            onChange={e => setPassword(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3 mr-0" controlId="formBasicCheckbox">
    <Form.Check style={{marginRight:"0px"}} className="alright mr-1" type="checkbox" label="Login as staff" />
  </Form.Group>
 
    <Col style={{textAlign:'center'}}>

    <div className="actions">
          {(
            <button>Login</button>
          )}
          {<p>Sending request...</p>}
          <button
            type='button'
            className="toggle"
            
          >
           
          </button>
        </div>
  </Col>
 
  <Row className="nopadding">
  <Form.Text className="alx">
          <li className="one" style={{color:"green",margin:"0px"}}
            
          >Register As Affiliate
   
          </li>
           <li className="two" style= {{color:"red"}} >
             Register as a Provider
   
          </li>
         
        </Form.Text>
        </Row>
        <Row>
        <Form.Group className="mt-3">
        <Form.Text  style={{textAlign:"center"}}>
          <h6>
             Enter as patient
             </h6>
        </Form.Text>
        </Form.Group>
        </Row>
      </Form>
      </Card>

    
    </Col>
  
   <Col  className=" d-none d-lg-block pr-0" >
  
     
   <Image src="banner.jpg"  style={{width:"100%",height:"100%",objectFit:"cover"}} />
   

   </Col>
   
     </Row>
      
   
      </Container>
       
    )
}

export default Content;
