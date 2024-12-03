import { createContext, useState, } from "react";

export const KosarContext = createContext("");

export const KosarProvider = ({ children }) => {
    const [kosarlista, setkosarlista] = useState([]);

    function kosarba(adat) {
      if (adat.db <= 0) {
        // Ha a termék készlete elfogyott, nem adunk hozzá a kosárhoz
        alert("A termék elfogyott!");
        return;
      }
    
      setkosarlista((prevKosarlista) => {
        const existingItem = prevKosarlista.find((elem) => elem.id === adat.id);
    
        if (existingItem) {
          return prevKosarlista.map((elem) =>
            elem.id === adat.id
              ? { ...elem, db: elem.db + 1 } // Kosárbeli darabszám növelése
              : elem
          );
        } else {
          // Új termék hozzáadása
          return [...prevKosarlista, { ...adat, db: 1 }];
        }
      });
    
      // Csökkentjük az eredeti készletet (a kosárban nem tároljuk a teljes készletet)
      adat.db -= 1;
    }
    
  


  return (
      <KosarContext.Provider value={{ kosarba, kosarlista}}>
      {children}
      </KosarContext.Provider>
  );
  

}