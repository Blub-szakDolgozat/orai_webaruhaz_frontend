import React, { useContext } from 'react';
import { ApiContext } from '../../contexts/ApiContext';
import { KosarContext } from '../../contexts/KosarContext';
import { Card, Button, Row, Col } from 'react-bootstrap';

export default function Kartya(props) {

  const { termekLista, setTermekLista } = useContext(ApiContext);

  const { kosarba } = useContext(KosarContext);

  function kattintas() {
    kosarba(props.adat);        
  }

  return (
    <Col xs={12} md={6} lg={4} className="mb-4"> {}
      <Card className="shadow-sm">
        <Card.Img
          variant="top"
          src={props.adat.image} 
          alt={props.adat.cim}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <Card.Body>
          <Card.Title>{props.adat.cim}</Card.Title>
          <Card.Text>{props.adat.leiras}</Card.Text>
          <Card.Text>Ár: {props.adat.ar} Ft</Card.Text>
          <Card.Text>Darabszám: {props.adat.db}</Card.Text>
          <div className="d-flex justify-content-between">
            <Button variant="primary" onClick={kattintas}>
              Kosárba
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
