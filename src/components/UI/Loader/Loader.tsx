import React from "react";
import { Spinner } from "react-bootstrap";

const Loader: React.FC = () => {
  return <Spinner animation="grow" variant="info" />;
};

export default Loader;
