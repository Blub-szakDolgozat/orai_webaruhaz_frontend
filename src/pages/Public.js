import React, { useContext } from 'react'
import { ApiContext } from '../context/ApiContext'
//import { KosarContext } from '../context/KosarContext'
import Vasarloter from "../component/Vasarloter"

export default function Public() {
    const {termekLista}= useContext(ApiContext)
    //const {kosarLista}= useContext(KosarContext)
  return (
    <main className="row">
      <aside className="col-lg-4">
        <h4>Kosár</h4>

        </aside>
        <article className="col-lg-8 row">
        <h4>Vásárlótér</h4>
        <Vasarloter termekLista={termekLista}/>
        </article>
        </main>
  )
}