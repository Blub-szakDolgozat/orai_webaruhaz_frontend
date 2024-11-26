import React, { useContext } from "react";
import { Container, Row, Col, Card} from "react-bootstrap";

export default function Kosar(props) {

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">Kosár</h2>
        <Row>
          { props.termekLista.map((termek) => (
            <Col key={termek.id} xs={12} md={6} lg={4} className="mb-3">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={termek.image}
                  alt={termek.title}
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{termek.title}</Card.Title>
                  <Card.Text>Ár: {termek.price} Ft</Card.Text>
                  <Card.Text>Darabszám: {termek.darabszam}</Card.Text> 
                  <div className="d-flex justify-content-between">
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
    </Container>
  );
}
