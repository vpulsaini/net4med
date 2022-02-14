import React from 'react'
import './Ho.css';
import { Image,Container,Row,Col, Button,Carousel,Navbar,NavDropdown,Nav,Card,Accordion,Dropdown, NavLink, ButtonGroup} from 'react-bootstrap'


const Ho = () => {
 
    return (
        <Container fluid>
            <Row>
            <Image src="himg1.jpg" className="img-fluid responsive"/>
            </Row>
            <Row> 
           
            
                <Col className="btn-toolbar">
             
                <Button className="ml-6" >
                    Get Started
                </Button>
                {' '} 
         
                <Button className= "mx-2 ml-7"  >
                   Free download for patients
                </Button>
  
                </Col>
              
             
            </Row>
            <Row className="mt-6">
            <Carousel fade>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src="himg2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src="himg2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src="himg2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src="himg2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

            </Row>
            <Row style={{marginTop:"130px"}}>
            <Image  src="himg9.jpg"/>
            </Row>



       <Row className="mt-5">
       <Accordion  defaultActiveKey="0" flush>
                        <Card  className="mx-8 my-3 " >
                            <Accordion.Toggle style={{background:"white",border:"none"}} className="cen" eventKey="0">
                                <h4 style={{color:"#150da8",fontWeight:"bold",fontSize:"40px"}}>Features &nbsp;<i class="fa fa-caret-down" style={{fontSize:"25px"}}></i></h4>
                                
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0">
                            <Card.Body style={{borderRadius:"25px",boxShadow:"0 0  5px 5px  #f1f1f1 "}} className="mt-5 mx-5">
                            <Row>
                            <Col className="abcd"><ul>
                                      <li><Image src="f1.svg" className="iicon" /></li>
                                      <li><h5>Patient Self Registration</h5></li>
                                    <li>Background details needed for treatment as per your speciality are collected from patient</li>
                                    </ul></Col>
                                    <Col className="abcd"><ul>
                                    <li><Image src="f2.svg" className="iicon" /></li>
                                      <li><h5>Case Logging</h5></li>
                                    <li>Patient as well as medical staff can enter vitals and diagnostic notes necessary for treatment.
                                      Histories are maintained for subsequent reference</li>
                                    </ul></Col>
                                    <Col className="abcd"><ul>
                                    <li><Image src="f3.svg" className="iicon" /></li>
                                      <li><h5>Prescriptions</h5></li>
                                     <li>Prescribe from a standard and comprehensive medicine list.
                                       Share prescriptions with pharmacist for automatic fulfilment</li>
                                    </ul></Col>
                                    <Col className="abcd"><ul>
                                    <li><Image src="f4.svg" className="iicon" /></li>
                                      <li><h5>Referrals</h5></li>
                                     <li>Give and receive referals easily at click</li>
                                    </ul></Col>
                                  </Row>
                                  <Row>
                                    <Col className="abcd"><ul><li>
                                    <li><Image src="f5.svg" className="iicon" /></li>
                                      <h5>Investigative reports</h5></li>
                                    <li>Share investigation requests with labs
                                      Access reports as soon as they are published
                                    </li>
                                    </ul></Col>
                                    <Col className="abcd"><ul><li>
                                    <li><Image src="f6.svg" className="iicon" /></li>
                                      <h5>Patient Engagements</h5></li>
                                    <li>Answer patient queries when free.Have one way or two way messaging.
                                      Optionally,have announcement boards for all your patients</li>
                                    </ul></Col>
                                    <Col className="abcd"><ul><li>
                                    <li><Image src="f7.svg" className="iicon" /></li>
                                      <h5>Bills and appointments</h5></li>
                                     <li>Generate quickbills and one touch appointments
                                      Easy to use Easy to configure.Intuitive for patients

                                     </li>
                                    </ul></Col>
                                    <Col className="abcd"><ul><li>
                                    <li><Image src="f8.svg" className="iicon" /></li>
                                      <h5>Multi doctor support</h5></li>
                                     <li>Add more doctors to your team and let each handle their patients</li>
                                    </ul></Col>
                                  </Row>
                                  </Card.Body>
                                  </Accordion.Collapse>
                                  </Card>
                                  </Accordion>

       </Row>

    
      
       <Row className="mt-5">
     
       <Accordion  defaultActiveKey="0" flush>
                        <Card className=" mx-8 my-3" >
                            <Accordion.Toggle style={{background:"white",border:"none"}} className="cen"  eventKey="0">
                            <h4 style={{color:"#150da8",fontWeight:"bold",fontSize:"40px"}}>Case studies &nbsp;<i class="fa fa-caret-down" style={{fontSize:"25px"}}></i></h4>
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0">
                            <Card.Body className="mt-5 mx-5">
                            <Row>
                                    <Col className="abcd"><Row><ul>
                                      <li><Image src="casestudies.svg" className="iicon" style={{padding:"5px",backgroundColor:"#d7ddfd"}}/></li>
                                      <li><h5 style={{fontWeight:"bold"}}>Diabetes Care</h5></li>
                                    <li>Self Monitored BSL(SMBG),diet and exercise diaries for accurate guidance.
                                        Adjust medicine/Insulin with a click.Ensure a consistent self-care regime

                                    </li>
                                  
                                    </ul></Row>
                                    <Button style={{border:"none",backgroundColor:"#fc6800"}}  >Control HbA1c from today</Button>
                                    </Col>
                                    <Col className="abcd"><Row><ul>
                                    <li><Image src="thyroid.png" className="iicon" style={{padding:"5px",backgroundColor:"#d7ddfd"}} /></li>
                                      <li><h5 style={{fontWeight:"bold"}}>Thyroid care</h5></li>
                                    <li>Prescribe thyroid investigations with a click.See date wise blood pressure ,
                                      weight-patterns for Easy analysis</li>
                                     
                                    </ul></Row> <Button style={{border:"none",backgroundColor:"#fc6800",marginTop:"22px"}}  >Facilitate Health through daily routine</Button></Col>
                                   
                                  </Row>
                                  <Row>
                                    <Col className="abcd">
                                      <Row>
                                      <ul><li>
                                    <li><Image style={{padding:"5px",marginTop:"80px",backgroundColor:"#d7ddfd"}}src="obesity.svg" className="iicon" /></li>
                                      <h5 style={{fontWeight:"bold"}}>Obesity Care</h5></li>
                                      <li>See pathologies and background history for easy weight analysis Prescribe diet plans.
                                      Monitor remotely yet regularly for best practices and best results
                                      
                                    </li>
                                    
                                    </ul></Row><Button style={{border:"none",backgroundColor:"#fc6800"}}  >Make Fitness easy</Button></Col>
                                    <Col className="abcd"><Row><ul><li>
                                    <li><Image style={{padding:"5px",marginTop:"80px",backgroundColor:"#d7ddfd"}} src="dental.svg" className="iicon" /></li>
                                      <h5 style={{fontWeight:"bold"}}>Dental Care</h5></li>
                                    <li>See patients dental records with date wise history.
                                      Allow patients to self-register and arrange appointments.
                                      Achieve higher visibility and loyalty</li>
                                
                                    </ul></Row><Button style={{border:"none",backgroundColor:"#fc6800"}}  >Keep them smiling</Button></Col>
                                   
                                  </Row>

                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                   
                    </Accordion>
                   
       </Row>
       <Row   style={{marginTop:"130px",textAlign:'center',textColor:"blue"}}>
<h4 style={{color:"#150da8",fontWeight:"bold",fontSize:"40px"}}>
    Best care at your Fingerprints
</h4>
       </Row>
       <Row className="mx-9">
         <Container className="my-5 py-3">
           <Row className="my-5 mx-5 ">
           <Col  >
           <Card style={{textAlign:"center",boxShadow:"0 0 0 3px #f1f1f1 "}}>
               <Image src="simplicity.svg"  className="py-3 mx-auto " style={{width:"200px",height:"200px",display:"block"}}></Image>
               <Card.Text className="cen py-3"><h3 style={{color:"#4b62c8"}}>Simplicity</h3></Card.Text> 
              </Card>
            </Col>
           <Col  >
           <Card style={{boxShadow:"0 0 0 3px #f1f1f1 "}}>
               <Image src="usability.svg" style={{width:"200px",height:"200px",display:"block"}} className="mx-auto py-3 "></Image>
              <Card.Text className="cen py-3"><h3 style={{color:"#4b62c8"}}>Usability</h3></Card.Text> 
              </Card></Col>
              <Col >
           <Card style={{boxShadow:"0 0 0 3px #f1f1f1 "}}>
               <Image src="security.svg" className="mx-auto py-3 "style={{width:"200px",height:"200px",display:"block"}}></Image>
               <Card.Text className="cen py-3"><h3 style={{color:"#4b62c8"}}>Security</h3></Card.Text> 
              </Card></Col>
              </Row>
              </Container>
       </Row>
      
       <Row className="mt-5"  >
     
        <div style={{textAlign:"center"}} id="lowerone">
        <h4 style={{color:"#150da8",fontWeight:"bold",fontSize:"40px",marginTop:"20px"}}>FAQs</h4>
        </div>
        <div style={{height: `calc(600px - 20vw)`,backgroundColor:"#4b62c8",position:"absolute",marginTop:"150px"}}></div>

   
     <div   style={{justifyContent:'center'}} id="upperone" >
  
     <Card className="mx-5" style={{background:"white",border:"2px solid #f1f1f1",borderRadius:"25px"}} >
         
         <Card.Body  >
       
           <Row >
           <Col className="abcde"><ul>
           <li>Who can use Net4Medix?</li>
           <li>How can I a doctor-get started</li>
           <li> What happens to my data when my annual subscription ends?</li>
           <li> What if my internet goes down?</li>
           <li> What parameters can I monitor?Can I customize those?</li>
           <li> Can I get a separate app in my/my clinic's name?</li>
             </ul></Col>
           <Col className="abcde">
           <ul>
           <li>Can I customize colors and logos?</li>
           <li>How is this different from XYZ app I have?I have already invested in it</li>
           <li> Do I also need to buy any other apps and systems if I sign up for Net4Medix?</li>
           <li> What if my internet goes down?</li>
           <li> What is a premium/ultra-premium offering mentioned above?</li>
          
             </ul>
           </Col>
           </Row>
         </Card.Body>
        
     </Card>

</div>
 

    
</Row>
      
     
       <Row style={{margin:"180px 60px 20px 60px",textColor:"blue",textAlign:'center'}}>

           <h1>So what are you waiting for?Get started Today!</h1>
           
       </Row>
       <Row  style={{margin:"10px 30px 20px 30px",textAlign:"center"}}>
           <Col>
       <Button className="px-5" variant="primary" size="lg"  type="button">Register Now</Button>
       </Col>
       </Row>
     
   
        </Container>
    )
}

export default Ho;
