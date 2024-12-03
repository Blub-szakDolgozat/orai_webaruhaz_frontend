import { createContext, useState, } from "react";

export const KosarContext = createContext("");

export const KosarProvider = ({ children }) => {
    const [kosarlista, setkosarlista] = useState([]);

    function kosarba(adat) {
      setkosarlista((prevKosarlista) => {
          const existingItem = prevKosarlista.find((elem) => elem.id === adat.id);
          if (existingItem) {
              existingItem.db++;
              return [...prevKosarlista];
          } else {
              return [...prevKosarlista, { ...adat, db: 1 }];
          }
      });
  }
  


  return (
      <KosarContext.Provider value={{ kosarba, kosarlista}}>
      {children}
      </KosarContext.Provider>
  );
  

}