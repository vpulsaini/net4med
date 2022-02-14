import React ,{Component}from 'react';
import './sidebar.css';
import  {Accordion,Card,Row,Col,Container,TabContainer,ListGroup,Tab,Nav,NavDropdown,Image ,Navbar,NavItem,MenuItem,Glyphicon,ContextAwareToggle, Carousel}   from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

export default function Sidebarx (){
 
  let location =useLocation();

      console.log(location.hash);
  
    return (
      <div  className="mt-0"style={{borderRight:"15px solid #cecece",height:"100%",bottom:'0px',borderTopRightRadius:"50px",backgroundColor:"#033687"}} flexColumn>
         
          <Image className="mt-3 ml-3" src="person.png" style={{width:"100px",height:"100px",borderRadius:"50%"}}>
          </Image>
          <h5 className="m-3" style={{display:"inline",color:"white"}}>Dr Aaron Young</h5> 
         <div style={{backgroundColor:"white"}}>
          <hr style={{background:"white"}} />
          </div>
  <Accordion  defaultActiveKey={location.hash}>
  
 
                        <Card style={{background:"#033687",color:"white"}} >
                            <Accordion.Toggle as={Card.Header} eventKey="#card1">
                                <h5>Manage Consultation <i className="fa fa-caret-down float-right"></i></h5>
                                
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="#card1">
                                <Card.Body >
                                <Nav variant="pills" defaultActiveKey={location.pathname} className="flex-column">
  <Nav.Item>
    <Nav.Link id="myanchor "style={{color:"white"}} to=
                                      {    
                                         {pathname:'/allconsultation',
                                         hash:'card1'

                                        }
                                      
                         } as={Link}
                          href="/allconsultation">All Consultation Plans</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link to={
                                      {     
                                        pathname:'/newspeciality',
                                        hash:'card1'
                                      }
                         } style={{color:"white"}} as={Link}  href="/newspeciality">New Speciality</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link style={{color:"white"}}  as={Link} to={
                                      {     
                                        pathname: '/allspeciality',
                                        hash:'card1'
                                      
                                      }
                         } href="/allspeciality">All Speciality</Nav.Link>
  </Nav.Item>

</Nav>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card style={{background:"#033687",color:"white"}} >
                            <Accordion.Toggle as={Card.Header} eventKey="#card2">
                              <h5><i className="fa fa-caret-down float-right"></i>Manage Staff</h5> 
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="#card2">
                                <Card.Body>
                                <Nav variant="pills" defaultActiveKey={location.pathname} className="flex-column">
  <Nav.Item>
    <Nav.Link style={{color:"white"}}  as={Link} to={
                                      {     
                                        pathname: '/createstaff',
                                        hash:'card2'
                                      
                                      }
                         } href="/createstaff">Create Staff</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link style={{color:"white"}}  as={Link} to={
                                      {     
                                        pathname: '/staff',
                                        hash:'card2'
                                      
                                      }
                         } href="/staff">All Staff</Nav.Link>
  </Nav.Item>
</Nav>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{background:"#033687",color:"white"}} >
                            <Accordion.Toggle as={Card.Header} eventKey="#card3">
                                <h5>Manage Registrations<i className="fa fa-caret-down float-right"></i></h5>
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="#card3">
                                <Card.Body >
                                <Nav variant="pills" defaultActiveKey={location.pathname} className="flex-column">
  <Nav.Item>
    <Nav.Link style={{color:"white"}}  as={Link} to={{pathname:'/registerconsultation',hash:'card3'}} href="/registerconsultation">Register Consultation</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link style={{color:"white"}}  as={Link} to={{pathname:'/allpatients',hash:'card3'}}  href="/allpatients">All Patients</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link style={{color:"white"}}  as={Link} to={{pathname:'/bulkupload',hash:'card3'}} href="/bulkupload">Bulk Upload</Nav.Link>
  </Nav.Item>

</Nav>

                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{background:"#033687",color:"white"}} >
                            <Accordion.Toggle as={Card.Header} eventKey="#card4">
                               <h5>Manage Conversations<i className="fa fa-caret-down float-right"></i></h5> 
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="#card4">
                                <Card.Body>
                                <Nav  variant="pills" defaultActiveKey={location.pathname} className="flex-column">
  <Nav.Item>
    <Nav.Link style={{color:"white"}} as={Link} to={{pathname:'/conversations',hash:'card4'}} href="/conversations">All Conversations</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link style={{color:"white"}} as={Link} to={{pathname:'/favouritemessages',hash:'card4'}} href="/favouritemessages">FavouriteMessages</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link style={{color:"white"}}  as={Link} to={{pathname:'/allfeaturedupdate',hash:'card4'}} href="/allfeaturedupdate">AllFeaturedUpdates</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link style={{color:"white"}}  as={Link} to={{pathname:'/createfeaturedupdate',hash:'card4'}} href="/createfeaturedupdate">CreateFeaturedUpdate</Nav.Link>
  </Nav.Item>

</Nav>
                                    </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{background:"#033687",color:"white"}} >
                            <Accordion.Toggle as={Card.Header} eventKey="#card5">
                                <h5>Feedback<i className="fa fa-caret-down float-right"></i></h5>
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="#card5">
                                <Card.Body >
                                <Nav variant="pills" defaultActiveKey={location.pathname} className="flex-column">
                                <Nav.Item>
    <Nav.Link style={{color:"white"}}  as={Link} to={{pathname:'/myfeedback',hash:'card5'}} href="/myfeedback">My Feedback</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link style={{color:"white"}}  as={Link} to={{pathname:'/mytestimonials',hash:'card5'}} href="/mytestimonials">My Testimonials</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link style={{color:"white"}}  as={Link} to={{pathname:'/addresource',hash:'card5'}} href="/addresource">Add a Resource</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link style={{color:"white"}}  as={Link} to={{pathname:'/allresource',hash:'card5'}} href="/allresource">All Resources</Nav.Link>
  </Nav.Item> 

</Nav>

                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        
                    </Accordion>
                 
   
    </div>
    )
}

