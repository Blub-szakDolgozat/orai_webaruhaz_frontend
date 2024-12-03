import React, { useContext } from 'react'
import { ApiContext } from '../contexts/ApiContext'
import Termekek from '../component/admin/Termekek'
import UrlapPublic from '../component/public/UrlapPublic'


export default function Admin() {
  const {termekLista}= useContext(ApiContext)
  return (
    <div>
      <main>
        <aside>
            <UrlapPublic/>
        </aside>
      <article>        
          <Termekek termekLista={termekLista}/>
        </article>
      </main>
    </div>
  )
}