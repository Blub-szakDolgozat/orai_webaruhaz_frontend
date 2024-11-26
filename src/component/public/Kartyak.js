import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Kartya from './Kartya'; 

export default function Kartyak(props) {

  return (
    <div>
      <h2 className="text-center mb-4">Termékek</h2>
      <Row>
        {props.termekLista.map((element, i) => {
          return (
            <Col key={element.id} xs={12} md={6} lg={4} className="mb-4">
              <Kartya adat={element} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
