import React, { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";
import Kosar from "../component/public/Kosar";
import Kartyak from '../component/public/Kartyak';
import { Row, Col } from 'react-bootstrap';

export default function Public() {
  const { termekLista } = useContext(ApiContext);

  return (
    <main className="container">
      <Row className="my-4">
        {/* Kosár */}
        <Col xs={12} lg={4} className="mb-4">
          <h4>Kosár</h4>
          <Kosar />
        </Col>

        {}
        <Col xs={12} lg={8}>
          <h4>Vasárlótér</h4>
          <Kartyak termekLista={termekLista} />
        </Col>
      </Row>
    </main>
  );
}
