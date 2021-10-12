import React from "react";
import { Button, Card, ListGroup, ListGroupItem, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { LinkContainer } from "react-router-bootstrap";
import { responseByIdType } from "../../../store/type/actionsType";

const MainCard: React.FC<responseByIdType> = (props) => {
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
        src={props.Poster}
      />
      <Card.Body>
        <Card.Title>
          {props.Title}, {props.Year}, {props.Type}
        </Card.Title>
        <Card.Text>{props.Plot}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Rated: {props.Rated}</ListGroupItem>
        <ListGroupItem>Runtime: {props.Runtime}</ListGroupItem>
        <ListGroupItem>Actor: {props.Actors}</ListGroupItem>
        <ListGroupItem>Awards: {props.Awards}</ListGroupItem>
        <ListGroupItem>imdbRating {props.imdbRating}</ListGroupItem>
        <ListGroupItem>Director: {props.Director}</ListGroupItem>
        <ListGroupItem>Writer: {props.Writer}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Nav.Link href="/">
          <LinkContainer to="/">
            <Button>Home</Button>
          </LinkContainer>
        </Nav.Link>
      </Card.Body>
    </Card>
  );
};
export default MainCard;
