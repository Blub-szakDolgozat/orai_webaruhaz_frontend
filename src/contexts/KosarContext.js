import { createContext, useState, } from "react";

export const KosarContext = createContext("");

export const KosarProvider = ({ children }) => {
    const [kosarlista, setkosarlista] = useState([]);

    function kosarba(adat) {
      const skosarLista = [...kosarlista];
      const VanIlyen =  skosarLista.find((elem) => elem.id === adat.id);
      if (VanIlyen === undefined) {
      adat.db = 1;
      skosarLista.push(adat);
      } else {
      VanIlyen.db++;
      } 
      setkosarlista([...skosarLista]);
    }


  return (
      <KosarContext.Provider value={{ kosarba, kosarlista}}>
      {children}
      </KosarContext.Provider>
  );
  

}