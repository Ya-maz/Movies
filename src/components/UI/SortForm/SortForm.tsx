import React from "react";
import { Form } from "react-bootstrap";

interface PropsType {
  dropHandler(event:React.ChangeEvent<HTMLSelectElement>): void;
}

const SortForm: React.FC<PropsType> = (props) => {
  return (
    <Form>
      <Form.Select onChange={ props.dropHandler } size='sm' aria-label="Floating label select example">
        <option>Sort by</option>
        <option value="sort">A-Z</option>
        <option value="reverseSort">Z-A</option>
        <option value="sortByYear">New first</option>
        <option value="reverseSortByYear">Old first</option>
      </Form.Select>
    </Form>
  );
};

export default SortForm;
