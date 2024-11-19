import React, { useContext } from 'react';
import Kosar from '../components/Kosar';
import Vasarloter from '../components/Vasarloter'; 
import { ApiContext } from '../contexts/ApiContext'; 
import KosarProvider from '../contexts/KosarContext'; 

export default function App() {
  const { termekLista } = useContext(ApiContext); 

  return (
    <KosarProvider>
      <main className="row">
        <aside className="col-lg-4">
          <h4>Kosár</h4>
          <Kosar />
        </aside>
        <article className="col-lg-8">
          <h4>Vasárlótér</h4>
          <Vasarloter termekLista={termekLista} />
        </article>
      </main>
    </KosarProvider>
  );
}