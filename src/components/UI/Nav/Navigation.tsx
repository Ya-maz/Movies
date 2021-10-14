import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { LinkContainer } from "react-router-bootstrap";

const Navigation: React.FC = () => (
    <Navbar bg="info" variant="dark">
      <Container>
        <Navbar.Brand href="/">Movies</Navbar.Brand>
        <Nav className="justify-content-end">
            <LinkContainer to="/author">
              <Button className='m-1'>Author</Button>
            </LinkContainer>
            <LinkContainer to="/team">
              <Button className='m-1'>Team</Button>
            </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
export default Navigation;
