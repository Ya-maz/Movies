import React from "react";
import { Card, Button, Nav } from "react-bootstrap";
// import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
// import { RootState } from "../../../store/reducers/rootReducer";
// import { responseSearchType, Search } from "../../../store/type/actionsType";

interface PropsType {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  buttonHandler(tt: string): void;
}

const Poster: React.FC<PropsType> = (props) => {
  return (
    <Card style={{ width: "14rem" }}>
      <Card.Img variant="top" src={props.Poster} />
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>
          {props.Year}, {props.Type}
        </Card.Text>
        <Nav.Link href="/movie">
          <LinkContainer to="/movie">
            <Button onClick={() => props.buttonHandler(props.imdbID)}>Movie</Button>
          </LinkContainer>
        </Nav.Link>
      </Card.Body>
    </Card>
  );
};

export default Poster;
