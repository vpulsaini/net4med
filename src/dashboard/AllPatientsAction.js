import React from 'react'
import HeaderLoggedIn from '../shared/components/HeaderLoggedIn'
import AllPatientsActionBody from './Components/AllPatientsActionBody'
import { Row,Col,Container } from 'react-bootstrap'
import Sidebarx from './Components/sidebar'
import AuthContext from '../auth-context'
import { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FooterLoggedIn from '../shared/components/FooterLoggedIn'
const AllPatientsAction = () => {
    const history = useHistory();

  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    // add validation

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAu2rbHrK5GeEItrOoNrliYeWg41dYPt_8', {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      // assumption: Always succeeds!

      history.replace('/');
    });
  };
    return (
        <Container className="pl-0" fluid>
                  <Row>
                <Col  xs={3}>
            <Sidebarx ></Sidebarx>
            </Col>
            <Col xs={9}>
            <HeaderLoggedIn></HeaderLoggedIn>
                <AllPatientsActionBody></AllPatientsActionBody>
            </Col>
            </Row>
            <Row>
       <FooterLoggedIn></FooterLoggedIn>
            </Row>
         

        </Container>
    )
}

export default AllPatientsAction
