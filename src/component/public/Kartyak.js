import React from 'react';
import { Row } from 'react-bootstrap';
import Kartya from './Kartya';

export default function Kartyak(props) {

  return (
    <div>
      <h2 className="text-center mb-4">Termékek</h2>
      <Row>
        {props.termekLista.map((element) => ( //props.termekLista A termékek adatait tartalmazó tömb.///A props.termekLista.map() segítségével minden egyes termékről létrehozunk egy Kartya komponenst.

          <Kartya adat={element} key={element.id} />
        ))}
      </Row>
    </div>
  );
}
