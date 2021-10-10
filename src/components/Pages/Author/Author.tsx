import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthorImg from "./../../../assets/Untitled.svg";

const Author: React.FC = () => {
  const state = {
    title: 'Hello every body',
    poster: {AuthorImg},
    plot: 'My name is Almaz. I am from Kazan. It is site my study project, so there may be something broken here',
    learning: ['Learning Javascript', 'Learning React', 'Learning Type']

  }
  return (
    <MainCard state={ state }>
  );
};
export default Author;
