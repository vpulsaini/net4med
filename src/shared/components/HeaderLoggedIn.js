import './Header.css';
import React from 'react'
import { useContext } from 'react';
import {Row,Col,Container,Nav,Navbar,Image,NavDropdown} from 'react-bootstrap';
import {NavLink,Link} from 'react-router-dom'
import AuthContext from '../../auth-context';
const HeaderLoggedIn = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  };
    return (
      <Container className="px-0" fluid style={{backgroundColor:"white"}}>
           <Navbar collapseOnSelect expand="lg"  style={{backgroundColor:"white"}} >
  <Container fluid>
  <Navbar.Brand href="/"><Image src="logo.png" height={40} style={{backgroundColor:"white"}} /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor:"white"}}/>
  <Navbar.Collapse id="responsive-navbar-nav" style={{backgroundColor:"white"}}>
    <Nav className="me-auto">
      
      
    </Nav>
    <Nav>
    
    
          <Nav.Link>
      {!isLoggedIn && (
           
              <NavLink className="ax" to='/login'>Login</NavLink>
         
          )}
        
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
         </Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<hr  />
        </Container>
    )
}

export default HeaderLoggedIn

