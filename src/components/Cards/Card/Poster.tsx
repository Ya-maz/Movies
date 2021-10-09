import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import { responseType } from "../../store/type/actionsType";

interface PosterProps {
  data: responseType
  // key: string,
  // title: string,
  // year: string,
  // poster: string,
  // runtime: string,
  // released: string,
  // rating: <Array<{Source: string,Value: string}>>
  
}

const Poster: React.FC<PosterProps> = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={ props.data.Poster} />
      <Card.Body>
        <Card.Title>{props.data.Title}</Card.Title>
        <Card.Text> Year: {props.data.Year}</Card.Text>
        <Card.Text> Released: {props.data.Released}</Card.Text>
        <Card.Text> Rating: { props.data.rating}</Card.Text>
        <Card.Text> Runtime: { props.data.Runtime}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Poster;

