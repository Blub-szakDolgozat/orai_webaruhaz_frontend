import React from 'react'
import Termek from './Termek'

export default function Termekek(props) {


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Cím</th>
            <th>Leírás</th>
            <th>Ár</th>
            <th>Db</th>
          </tr>
        </thead>
        <tbody>
      {
        props.termekLista.map((element,i)=>{
            return <Termek adat={element} key={element.id} />
        }
        )      
        }
        </tbody>

    </table>
    </div>
  )
}
