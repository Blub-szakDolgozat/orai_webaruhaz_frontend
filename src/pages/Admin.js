import React, { useContext } from 'react'
import { ApiContext } from '../contexts/ApiContext'
import Termekek from '../component/admin/Termekek'

export default function Admin() {
  const {termekLista}= useContext(ApiContext)
  return (
    <div>
      <main>
      <article>
        <h4>Termékek</h4>
        
          <Termekek termekLista={termekLista}/>
        </article>
      </main>
    </div>
  )
}