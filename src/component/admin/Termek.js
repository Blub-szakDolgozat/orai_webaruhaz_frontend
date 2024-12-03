import React, { useContext, useState } from 'react';
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

  // Szerkesztés funkció
  const [szerkesztes, setSzerkesztes] = useState(false);
  const [szerkesztTermek, setSzerkesztTermek] = useState(props.adat);

  const szerkesztGomb = () => {
    setSzerkesztes(true);
  };

  const szerkesztesMentese = () => {
    const szerkesztettLista = termekLista.map(item =>
      item.id === szerkesztTermek.id ? szerkesztTermek : item
    );
    setTermekLista(szerkesztettLista);
    setSzerkesztes(false);
  };

  const szerkesztesValtoztatasa = (elem) => {
    const { name, value } = elem.target;

    if (name === "db" && value < 0) {
      return;
    }
    if (name === "ar" && value < 0) {
      return; 
    }

    setSzerkesztTermek(elozo => ({
      ...elozo,
      [name]: value
    }));
  };

  function kattintas() {
    kosarba(props.adat);
  }

  return (
    <tr>
        <td>
        {szerkesztes ? (<input
            type="text"
            name="cim"
            value={szerkesztTermek.cim}
            onChange={szerkesztesValtoztatasa}/>) : (
          props.adat.cim
        )}
      </td>
      <td>
        {szerkesztes ? (<input
            type="text"
            name="leiras"
            value={szerkesztTermek.leiras}
            onChange={szerkesztesValtoztatasa}/>) : (
          props.adat.leiras
        )}
      </td>
      <td>
        {szerkesztes ? (<input
            type="number"
            name="ar"
            value={szerkesztTermek.ar}
            onChange={szerkesztesValtoztatasa}/>) : (
          `${props.adat.ar} Ft`
        )}
      </td>
      <td>
        {szerkesztes ? (<input
            type="number"
            name="db"
            value={szerkesztTermek.db}
            onChange={szerkesztesValtoztatasa}/>) : (
          props.adat.db
        )}
      </td>
      <td>
        <Button variant="danger" onClick={torles}>Törlés</Button>
      </td>
      <td>
        {szerkesztes ? (
          <Button variant="success" onClick={szerkesztesMentese}>Mentés</Button>
        ) : (
          <Button variant="warning" onClick={szerkesztGomb}>Szerkesztés</Button>
        )}
      </td>
    </tr>
  );
}
