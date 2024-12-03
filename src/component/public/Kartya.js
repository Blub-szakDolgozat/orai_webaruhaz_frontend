import React, { useContext } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { KosarContext } from "../../contexts/KosarContext";

export default function Kartya(props) {
  const { kosarba } = useContext(KosarContext);

  function kattintas() {
    kosarba(props.adat); // Az adat tartalmazza a `db` értéket
  }

  return (
    <Col xs={12} md={6} lg={4} className="mb-4">
      <Card className="shadow-lg border-0 rounded">
        
        <Card.Body>
          <Card.Title>{props.adat.cim}</Card.Title>
          <Card.Text>{props.adat.leiras}</Card.Text>
          <Card.Text>Ár: {props.adat.ar} Ft</Card.Text>
          <Card.Text>
            Elérhető: {props.adat.db > 0 ? props.adat.db : "0"} db
          </Card.Text>
          <Button
            variant="primary"
            onClick={kattintas}
            disabled={props.adat.db <= 0} // Gomb letiltása, ha elfogyott a készlet
          >
            Kosárba
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
