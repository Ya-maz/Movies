import React from 'react';
import {Container, Col, Row, InputGroup, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Input.css'

const InputLineForSearch = () => {
  return (
    <Container className="p-5 mt-5 px800">
      <Row>
        <Col>
          <InputGroup  className="mb-3">
          <FormControl
          placeholder="Find your favorite movie"
          aria-label="SearchMovie"
          aria-describedby="basic-addon1"
          />
          <Button variant="outline-secondary" id="button-addon2">
          Search
          </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>


  )
}

export default InputLineForSearch