import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthorImg from "./../../../assets/Untitled.svg";

const Author: React.FC = () => {
  return (
    <Card
      style={{
        width: "40rem",
        margin: "50px auto",
      }}
    >
      <Card.Img variant="top" style={{
        width: "10rem",
        margin: "15px",
      }} src={AuthorImg} />
      <Card.Body>
        <Card.Title>Hello every body</Card.Title>
        <Card.Text>
          My name is Almaz. I am from Kazan. It is site my study project, so there may be something broken here
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Learning Javascript</ListGroupItem>
        <ListGroupItem>Learning React</ListGroupItem>
        <ListGroupItem>Learning Type</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};
export default Author;
