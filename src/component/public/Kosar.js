import React, { useContext } from "react";
import { KosarContext } from "../contexts/KosarContext";

export default function Kosar() {
  const { kosarLista, darabszamCsokkent, kosarbolEltavolit } = useContext(KosarContext);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Kosár</h2>
      {kosarLista.length > 0 ? (
        <div className="row">
          {kosarLista.map((termek) => (
            <div key={termek.id} className="col-12 col-md-6 col-lg-4 mb-3">
              <div className="card h-100 shadow-sm">
                <img
                  src={termek.image}
                  alt={termek.title}
                  className="card-img-top"
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{termek.title}</h5>
                  <p className="card-text">Ár: {termek.price} Ft</p>
                  <p className="card-text">Darabszám: {termek.darabszam}</p> {}
                  <div className="d-flex justify-content-between">
                    <button
                      onClick={() => darabszamCsokkent(termek)} 
                      className="btn btn-warning"
                    >
                      -
                    </button>
                    <button
                      onClick={() => kosarbolEltavolit(termek)}
                      className="btn btn-danger"
                    >
                      Eltávolít
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">A kosár üres.</p>
      )}
    </div>
  );
}
