import React, { useContext } from 'react'
import { ApiContext } from '../contexts/ApiContext'
import Termekek from '../component/admin/Termekek'

export default function Admin() {
  const {termekLista}= useContext(ApiContext)
  return (
    <div>
      <main className="row">
      <aside className="col-lg-4">
      <h4>Termékek</h4>
      
        <Termekek termekLista={termekLista}/>
        </aside>
        </main>
    </div>
  )
}