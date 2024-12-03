import React, { useContext, useState } from 'react';
import { ApiContext } from '../../contexts/ApiContext';
import { Button } from 'react-bootstrap';

export default function Termek(props) {

  const { termekLista, setTermekLista, putAdat, deleteAdat } = useContext(ApiContext);

  // Törlés funkció
  const torles = async () => {
    deleteAdat('/api/termekTorol/{id}');
};



  // Szerkesztés funkció
  const [szerkesztes, setSzerkesztes] = useState(false);
  const [szerkesztTermek, setSzerkesztTermek] = useState(props.adat);

  const szerkesztGomb = () => {
    setSzerkesztes(true);
  };

  const szerkesztesMentese = async () => {
    try {
        await putAdat('/api/termekek', szerkesztTermek.id, szerkesztTermek);
        const szerkesztettLista = termekLista.map(item =>
            item.id === szerkesztTermek.id ? szerkesztTermek : item
        );
        setTermekLista(szerkesztettLista);
        setSzerkesztes(false);
    } catch (error) {
        console.error("Hiba történt a szerkesztett termék mentésekor:", error);
        alert("Hiba történt a mentés során!");
    }
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
