import React from 'react'
import { ApiContext } from '../contexts/ApiContext';

export default function Termek(props) {
  const { termekLista, setTermekLista } = useContext(ApiContext);

  const torles = () => {
    const listaFrissitese = termekLista.filter(item => item.id !== props.obj.id);
    setTermekLista(listaFrissitese); 
  };
  return (
    <tr>
      <td>{props.adat.cim}</td>
        <td>{props.adat.leiras}</td>
        <td>{props.adat.ar}</td>
        <td>{props.adat.db}</td>
        <td></td>
      </tr>
      
  )
}
