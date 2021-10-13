import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, ListGroup, ListGroupItem, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AuthorImg from "../../../assets/Untitled.svg";
import "./Author.css";

const Author: React.FC = () => {
  const state = {
    title: "Hello every body",
    poster: AuthorImg,
    plot: "My name is Almaz. I am from Kazan. It is site my study project, so there may be something broken here",
    learning: ["Learning Javascript", "Learning React", "Learning Typescript"],
  };
  return (
    <Card className="card">
      <Card.Img variant="top" src={state.poster} className="image" />
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
        <Nav.Link href="/">
          <LinkContainer to="/">
            <Button className="button">Home</Button>
          </LinkContainer>
          <LinkContainer to="/team">
            <Button className="button">Team</Button>
          </LinkContainer>
        </Nav.Link>
      </Card.Body>
    </Card>
  );
};
export default Author;
