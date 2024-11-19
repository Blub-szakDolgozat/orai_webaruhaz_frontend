import React, { useContext } from 'react'
import { ApiContext } from '../context/ApiContext'
import Termekek from '../component/Termekek'

export default function Admin() {
  const {termekLista}= useContext(ApiContext)
  return (
    <div>
      <main className="row">
      <aside className="col-lg-4">
      <h4>Termékek</h4>
      
        <Termekek adminLista={termekLista}/>
        </aside>
        </main>
    </div>
  )
}