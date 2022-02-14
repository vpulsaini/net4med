import './Header.css';
import React from 'react'
import { useContext } from 'react';
import {Row,Col,Container,Nav,Navbar,Image,NavDropdown, Button} from 'react-bootstrap';
import {NavLink,Link} from 'react-router-dom'
import AuthContext from '../../auth-context';
const HeaderLoggedIn = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const user = 'Vaibhav';

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("user");
    localStorage.removeItem("posts");
    localStorage.removeItem("testObject");
    window.location.href = "/login";
  };
    return (
      <Container className="px-0 py-0" fluid style={{backgroundColor:"white"}}>
           <Navbar collapseOnSelect expand="lg"  style={{backgroundColor:"white"}} >
  <Container fluid className="px-0 mt-0">
  <Navbar.Brand className="mt-0"href="/"><Image src="logo.png" height={40} style={{backgroundColor:"white"}} /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor:"white"}}/>
  <Navbar.Collapse id="responsive-navbar-nav" style={{backgroundColor:"white"}}>
  <Nav className="me-auto"></Nav>
    <Nav>
    
    
          <Nav.Link>
      
        
          { (
            <li>
              <Button  onClick={handleLogout}>Logout</Button>
            </li>
          )}
         </Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<hr className="mt-0" />
        </Container>
    )
}

export default HeaderLoggedIn
