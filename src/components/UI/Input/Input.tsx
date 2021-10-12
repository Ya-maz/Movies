import React from "react";
import {
  Container,
  Col,
  Row,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Input.css";

interface InputLineForSearchProps {
  inputHandler(event: React.ChangeEvent<HTMLInputElement>): void;
  title: string;
  enterPressHandler(event: React.KeyboardEvent): void;
  buttonHandler(): void;
}

const InputLineForSearch: React.FC<InputLineForSearchProps> = (props) => {
  return (
    <Container className="p-3 mt-4 px800">
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Find your favorite movie"
              aria-label="SearchMovie"
              aria-describedby="basic-addon1"
              value={props.title}
              onChange={props.inputHandler}
              onKeyPress={props.enterPressHandler}
            />
            <Button
              variant="outline-primary"
              id="button-addon2"
              onClick={props.buttonHandler}
            >
              Search
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default InputLineForSearch;
