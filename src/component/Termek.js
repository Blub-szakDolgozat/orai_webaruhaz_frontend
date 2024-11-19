import React from 'react'

export default function Termek(props) {
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
