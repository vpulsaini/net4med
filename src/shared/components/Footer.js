import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row,Col,Container,Image} from 'react-bootstrap'
const Footer = () => {
    return (
        <>
        
       <Container  fluid style={{textAlign:'center',borderTop:"1px solid #cccccc"}}>
       <Row className="center" style={{marginTop:"10px"}}>
<ul >
        <li>
        <a>
<Image src="Fb.svg" style={{height:"25px"}} />
</a>
<a><Image src="in.svg" style={{height:"25px"}} />

</a>
<a>
<Image src="twit.svg" style={{height:"25px"}} />
</a>
<a>
<Image src="google.svg" style={{height:"25px"}} />
</a>
<a><Image src="Fb.svg" style={{height:"25px"}} /></a>
        </li>
 </ul>
 </Row>

<Row className='center'>
    <ul>
        <li >
        <a>Home</a>
<a>About</a>
<a>Contact</a>
<a>Privacy</a>
<a>Terms</a>
        </li>
        </ul>
        </Row>
        <Row className='center'>
            <ul>
        <li>
       &copy;
       Periwinkle
        </li>
        </ul>
        </Row>
       </Container>
     

    
    </>
        
    );
}

export default Footer;