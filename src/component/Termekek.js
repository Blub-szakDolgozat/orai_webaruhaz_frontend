import React from 'react'
import Termek from './Termek'

export default function Termekek() {
  return (
    <div>
      <table>
        <th>Cím</th>
        <th>Leírás</th>
        <th>Ár</th>
        <th>Db</th>
      {
        props.adminLista.map((element,i)=>{
            return <Termek adat={element} key={element.id} />
        }
        )      
        }

    </table>
    </div>
  )
}
