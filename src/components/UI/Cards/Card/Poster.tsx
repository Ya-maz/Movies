import React from "react";
import { Card, Button, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { RootState } from "../../../store/reducers/rootReducer";
import { rightResponseType } from "../../../store/type/actionsType";

interface PosterProps {
  data: rightResponseType
}

const Poster: React.FC<PosterProps> = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={ props.data.Poster} />
      <Card.Body>
        <Card.Title>{props.data.Title}</Card.Title>
        <Card.Text> Year: {props.data.Year}</Card.Text>
        <Card.Text> Released: {props.data.Released}</Card.Text>
        <Card.Text> Rating: { props.data.Ratings}</Card.Text>
        <Card.Text> Runtime: { props.data.Runtime}</Card.Text>
        <Nav.Link href="/author">
            <LinkContainer to="/author">
              <Button>Author</Button>
            </LinkContainer>
          </Nav.Link>
      </Card.Body>
    </Card>
  );
};

export default Poster;

