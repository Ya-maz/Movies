import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthorImg from "./../../../assets/Untitled.svg";
import MainCard from "../../UI/Cards/MainCard/MainCard";
import { Button, Card, ListGroup, ListGroupItem, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Author: React.FC = () => {
  const state = {
    title: 'Hello every body',
    poster: AuthorImg,
    plot: 'My name is Almaz. I am from Kazan. It is site my study project, so there may be something broken here',
    learning: ['Learning Javascript', 'Learning React', 'Learning Typescript']

  }
  return (
    <Card
    style={{
      width: "40rem",
      margin: "50px auto",
    }}
  >
    <Card.Img
      variant="top"
      style={{
        width: "10rem",
        margin: "15px",
      }}
      src={state.poster}
    />
    <Card.Body>
      <Card.Title>{state.title}</Card.Title>
      <Card.Text>{state.plot}</Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
        <ListGroupItem>{state.learning[0]}</ListGroupItem>
        <ListGroupItem>{state.learning[1]}</ListGroupItem>
        <ListGroupItem>{state.learning[2]}</ListGroupItem>
    </ListGroup>
    <Card.Body>
      <Nav.Link href="/home">
        <LinkContainer to="/home">
          <Button>Home</Button>
        </LinkContainer>
      </Nav.Link>
    </Card.Body>
  </Card>    
  );
};
export default Author;
