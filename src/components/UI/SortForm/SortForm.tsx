import React from "react";
import { Form } from "react-bootstrap";
import { SORT_BY_YEAR, SORT_BY_YEAR_REVERSE, SORT_DEFAULT, SORT_REVERSE } from "../../store/actions";

interface PropsType {
  dropHandler(event: React.ChangeEvent<HTMLSelectElement>): void;
}

const SortForm: React.FC<PropsType> = (props) => (
    <Form>
      <Form.Select onChange={props.dropHandler} size="sm" aria-label="Floating label select example">
        <option>Sort by</option>
        <option value={SORT_DEFAULT}>A-Z</option>
        <option value={SORT_REVERSE}>Z-A</option>
        <option value={SORT_BY_YEAR}>New first</option>
        <option value={SORT_BY_YEAR_REVERSE}>Old first</option>
      </Form.Select>
    </Form>
  );

export default SortForm;
