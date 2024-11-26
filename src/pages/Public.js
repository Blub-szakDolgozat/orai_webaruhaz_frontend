import React, { useContext } from "react";
import Termekek from "../component/admin/Termekek";
import { ApiContext } from "../contexts/ApiContext";
import Kosar from "../component/public/Kosar";


export default function Public() {
  const { termekLista } = useContext(ApiContext);

  return (
    <main className="row">
      <aside className="col-lg-4">
        <h4>Kosár</h4>
          <Kosar />

      </aside>
      <article className="col-lg-8">
        <h4>Vasárlótér</h4>
        <Termekek termekLista={termekLista} />
      </article>
    </main>
  );
}
