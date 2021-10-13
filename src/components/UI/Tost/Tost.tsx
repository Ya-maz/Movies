import React from "react";
import { Toast } from "react-bootstrap";
import  Fire  from './../../../assets/fire.svg';
import './Tost.css';

interface typeProps {
  show: boolean;
  toggleShow():void;
}
const Tost: React.FC<typeProps> = (props) => (
  <Toast className='toast' show={props.show} onClose={props.toggleShow}>
          <Toast.Header>
      <img
        src={ Fire }
              className="rounded me-2 img"
              alt="img"
            />
            <strong className="me-auto">Oops, the site is going down soon!</strong>
            <small>1 min ago</small>
          </Toast.Header>
          <Toast.Body>Hurry up! Нерасторопный</Toast.Body>
        </Toast>
  );

export default Tost;
