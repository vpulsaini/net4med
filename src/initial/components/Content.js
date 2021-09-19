import './Content.css';
import { useRef, useContext,useState } from 'react';
import { useHistory } from 'react-router-dom';
import React from 'react'
import { Row,Col,Container ,Image,Card,Form,Button} from 'react-bootstrap';
import AuthContext from '../../auth-context';
const Content = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAu2rbHrK5GeEItrOoNrliYeWg41dYPt_8';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAu2rbHrK5GeEItrOoNrliYeWg41dYPt_8';
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        history.replace('/allpatientsaction');
      })
      .catch((err) => {
        alert(err.message);
      });
  };
    return (
  <Container   fluid className="nopadding" >
     <Row className="nopadding">
     <Col  className="ml-0 mx-md-5" >
    
      
 
      <Card className="mx-0 my-0 mx-md-5 my-md-5" style={{boxShadow:"0 1px 4px rgba(0, 0, 0, 0.2)"}} >
     
      <Form onSubmit={submitHandler} className="mx-5 mt-3"  >
  
       <h1 className="mt-1">Sign In</h1>
       <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control  type="email" placeholder="someone@example.com"  required ref={emailInputRef}/>
    <Form.Text className="text-muted">
  
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Your Password"  required
            ref={passwordInputRef} />
  </Form.Group>
  <Form.Group className="mb-3 mr-0" controlId="formBasicCheckbox">
    <Form.Check style={{marginRight:"0px"}} className="alright mr-1" type="checkbox" label="Login as staff" />
  </Form.Group>
 
    <Col style={{textAlign:'center'}}>

    <div className="actions">
          {!isLoading && (
            <button>{isLogin ? 'Login' : 'Create Account'}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button
            type='button'
            className="toggle"
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
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
