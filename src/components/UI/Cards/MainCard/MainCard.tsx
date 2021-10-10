import React from "react";
import { Button, Card, ListGroup, ListGroupItem, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { LinkContainer } from "react-router-bootstrap";
import { rightResponseType } from "../../../store/type/actionsType";

const MainCard: React.FC<rightResponseType> = (props) => {
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
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>{props.Plot}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem></ListGroupItem>
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
export default MainCard;
