import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation: React.FC = () => {
  return (
    <Navbar bg="info" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Movies</Navbar.Brand>
      <Nav className="justify-content-end">
        <Nav.Link href="#author">Author</Nav.Link>
      </Nav>  
    </Container>
    </Navbar>
  )
}
export default Navigation