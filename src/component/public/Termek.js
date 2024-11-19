import React, { useContext } from 'react'
import { ApiContext } from '../contexts/ApiContext';
import { KosarContext } from '../../contexts/KosarContext';

export default function Termek(props) {

  const { termekLista, setTermekLista } = useContext(ApiContext);

  const torles = () => {
    const listaFrissitese = termekLista.filter(item => item.id !== props.obj.id);
    setTermekLista(listaFrissitese); 
  };

    const {kosarba} =useContext(KosarContext)
    function kattintas() {
        kosarba(props.adat)        
    }

  return (
    <tr>
      <td>{props.adat.cim}</td>
        <td>{props.adat.leiras}</td>
        <td>{props.adat.ar}</td>
        <td>{props.adat.db}</td>
        <td><button type="button" class="btn btn-primary" onClick={()=>kattintas()}>
          Kosárba
        </button></td>
      </tr>
      
  )
}
