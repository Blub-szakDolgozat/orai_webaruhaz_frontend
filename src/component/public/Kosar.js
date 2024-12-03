import React, { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { KosarContext } from "../../contexts/KosarContext";

export default function Kosar() {
  const { kosarlista } = useContext(KosarContext);

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">Kosár</h2>
      {kosarlista.length > 0 ? (
        <Row>
          {kosarlista.map((termek) => (
            <Col key={termek.id} xs={12} md={6} lg={4} className="mb-3">
              <Card className="h-100 shadow-sm">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{termek.cim}</Card.Title>
                  <Card.Text>{termek.leiras}</Card.Text>
                  <Card.Text>Ár: {termek.ar} Ft</Card.Text>
                  <Card.Text>Darabszám: {termek.db}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p className="text-center">A kosár üres.</p>
      )}
    </Container>
  );
}
