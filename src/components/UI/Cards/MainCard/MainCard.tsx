import React from "react";
import { Button, Card, ListGroup, ListGroupItem, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { LinkContainer } from "react-router-bootstrap";

interface MainCardProps {
  [key: string]: string;
}


const MainCard: React.FC<MainCardProps> = (props) => {
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
      }} src={props.state.poster} />
      <Card.Body>
        <Card.Title>{ props.state.title}</Card.Title>
        <Card.Text>
          { props.state.plot }
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {props.state.learning ? props.state.learning.map(learn => <ListGroupItem>{learn}</ListGroupItem>) : null}

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
