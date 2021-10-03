import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { NavLink } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";

const Navigation: React.FC = () => {
  return (
    <Navbar bg="info" variant="dark">
      <Container>
        <Navbar.Brand href="/">Movies</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="/author">
            <LinkContainer to="/author">
              <Button>Author</Button>
            </LinkContainer>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Navigation;
