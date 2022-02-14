import React,{Component,Fragment} from "react";
import { Card,Button, Row, Col,Tab,Tabs,Modal,Carousel} from "react-bootstrap";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import './offcanvas.css';
import './offcanvas.js';
function imageShow(length,source){
  let i,kb=[];
  for(i=0;i<length;i++){
    kb.push(<Carousel.Item><img
      className="d-block w-100"
      src={`${source}&imgId=${i}`}
      alt="First slide"
    />
 <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
</Carousel.Item>)
  }
  console.log(kb);
  return kb;
  
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
     {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Carousel fade>
 
  
      {imageShow(3,props.images)}
     
 
 

</Carousel>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const  AllConversationsActionBody= () =>{
     const location =useLocation();
     const [modalShow, setModalShow] = useState(false);
        let messa=location.state;
        if(!messa){
          window.location.href="/conversations";
        }
        console.log(messa);
        let pName=messa.pName;
        let pubId=messa.pubId;
        let uname=messa.uname;
        let passw=messa.passw;
        let nI=messa.noOfImages;
     
        const imageUrl=`https://net4medix.com/mmc/match/downloadPublicationImage?pubId=${pubId}&uname=${uname}&pwd=${passw}&appVersion=0.0.31&providerName=${pName}&lite=true&`;
        
         let ip;
         let items=[]
         for(ip=0;ip<3;ip++){
          items.push(ip);
         }
        let itemList=items.map((item)=>{return <><Col xs={3} style={{margin:'10px'}}>
        <Card style={{ width: '18rem',padding:'10px'}}>
<Card.Img onClick={(item) => setModalShow(true)} variant="top" src={`${imageUrl}&imgId=${item}`} />
<Card.Body>
<Card.Title>Card Title</Card.Title>
<Card.Text>
  Some quick example text to build on the card title and make up the bulk of
  the card's content.
</Card.Text>
<Button variant="primary" onClick={() => setModalShow(true)}>Go somewhere</Button>
</Card.Body>

</Card>
</Col>

      </>
})
        return ( 
        
           <>
           <div class="mb-3">
           <h2>Patient Name</h2>
           <h3>Registered On:20/1/2020</h3>
           </div>
           <Tabs  defaultActiveKey="images" id="uncontrolled-tab-example">
  <Tab  eventKey="images" title="Images">
  <Row> 
               {itemList} 
  </Row>
  <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        images={`${imageUrl}`}
      />

      
  </Tab>
  <Tab eventKey="messages" title="Messages" >
   
  </Tab>
  <Tab eventKey="details" title="Details">
   
  </Tab>
  <Tab eventKey="moreValues" title="More Values">
   
  </Tab>
  <Tab eventKey="printReport" title="Print Report">
   
  </Tab>

</Tabs>
          
</>)
         
    }
    


export default AllConversationsActionBody;