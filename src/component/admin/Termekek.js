import React from 'react';
import Termek from './Termek';
import { Container } from 'react-bootstrap';

export default function Termekek(props) {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Termékek</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Cím</th>
            <th>Leírás</th>
            <th>Ár</th>
            <th>Db</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.termekLista.map((element) => {
            return <Termek adat={element} key={element.id} />;
          })}
        </tbody>
      </table>
    </Container>
  );
}
