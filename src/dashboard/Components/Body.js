import React from 'react';
import { Row,Col,Container,Table,Accordion,Card} from 'react-bootstrap';
import { Nav,NavItem,NavLink } from 'reactstrap';
const Bodyx = () => {
    return (
        
        
        <Row>
      <Table responsive striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Details</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
</Row>
     
   
    )
}

export default Bodyx
