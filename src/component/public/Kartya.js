import React, { useContext } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { KosarContext } from "../../contexts/KosarContext";

export default function Kartya(props) {
  const { kosarba } = useContext(KosarContext);

  function kattintas() {
    kosarba(props.adat); //Az adott termék adatait tartalmazza (pl. név, ár, leírás, elérhető darabszám).
  }

  return (
    <Col xs={12} md={6} lg={4} className="mb-4">
      <Card className="shadow-lg border-0 rounded">
        
        <Card.Body>
          <Card.Title>{props.adat.cim}</Card.Title>
          <Card.Text>{props.adat.leiras}</Card.Text>
          <Card.Text>Ár: {props.adat.ar} Ft</Card.Text>
          <Card.Text>
            Elérhető: {props.adat.db > 0 ? props.adat.db : "0"} db //Ha a termék készlete (db) pozitív, hozzáadja azt a kosárhoz

          </Card.Text>
          <Button
            variant="primary"
            onClick={kattintas} //	Meghívódik a kosarba függvény a KosarContext-ből.
            disabled={props.adat.db <= 0} // Gomb letiltása, ha elfogyott a készlet
          >
            Kosárba
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
 
/*________________________________________
Egymással való kapcsolat
•	Kartyak -> Kartya:
  o	A Kartyak komponens felelős a termékek listázásáért.
  o	A Kartya komponensek a konkrét termékinformációkat jelenítik meg és kezelik az interakciókat.
•	Kartya -> KosarContext:
  o	A KosarContext biztosítja a kosarba függvényt, amely hozzáadja a terméket a kosárhoz.
•	Kosar -> KosarContext:
  o	A kosár tartalmát (kosarlista) a KosarContext-ből nyeri ki.
*/