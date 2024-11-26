import React, { useContext } from 'react';
import { ApiContext } from '../../contexts/ApiContext';
import { KosarContext } from '../../contexts/KosarContext';
import { Button } from 'react-bootstrap';

export default function Termek(props) {

  const { termekLista, setTermekLista } = useContext(ApiContext);

  // Törlés funkció
  const torles = () => {
    const listaFrissitese = termekLista.filter(item => item.id !== props.adat.id);
    setTermekLista(listaFrissitese); 
  };

  // Kosárba rakás funkció
  const {kosarba} = useContext(KosarContext);

  function kattintas() {
    kosarba(props.adat);
  }

  return (
    <tr>
      <td>{props.adat.cim}</td>
      <td>{props.adat.leiras}</td>
      <td>{props.adat.ar} Ft</td>
      <td>{props.adat.db}</td>
      <td>
        <Button variant="danger" onClick={torles}>Törlés</Button>
      </td>
      <td>
        <Button variant="warning" onClick={() => alert('Szerkesztés funkció még nincs implementálva')}>Szerkesztés</Button>
      </td>
    </tr>
  );
}
