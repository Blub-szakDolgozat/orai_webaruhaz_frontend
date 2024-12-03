import { createContext, useState, } from "react";

export const KosarContext = createContext(""); // Azért hoztuk létre, hogy a kosárral kapcsolatos logika minden szükséges helyen elérhető legyen, anélkül, hogy állapotokat és függvényeket kéne propokon keresztül átadni

export const KosarProvider = ({ children }) => { //Ez egy komponens, amely a KosarContext állapotát és funkcióit biztosítja a gyermek komponensek számára. ///	A children paraméter révén az alkalmazás összes alárendelt komponense hozzáférhet a kosár funkcióihoz.
    const [kosarlista, setkosarlista] = useState([]); //A kosarlista egy state, amely tömbként kezeli a kosárban lévő termékeket. ///A kosarlista state módosítására használjuk, például új termék hozzáadásakor vagy darabszám növelésekor.

    function kosarba(adat) {//Ez a függvény végzi a kosár állapotának módosítását, amikor a felhasználó egy terméket hozzáad a kosárhoz.
      if (adat.db <= 0) {
        // Ha a termék készlete elfogyott, nem adunk hozzá a kosárhoz
        alert("A termék elfogyott!");
        return;//A függvény itt leáll (return), így az adott termék nem kerül a kosárba.
      }
    
      setkosarlista((prevKosarlista) => {
        const existingItem = prevKosarlista.find((elem) => elem.id === adat.id); //setkosarlista:Ez a React useState által generált függvény. Új értéket állít be a kosarlista állapot számára.
       // Az aktuális értéket (prevKosarlista) egy callback függvényen keresztül érjük el.
        //prevKosarlista.find():A find() függvény végigmegy a prevKosarlista (azaz az aktuális kosárlista) elemein, hogy megtalálja azt az elemet, amelynek az id értéke megegyezik az adat.id-vel.Cél: Ellenőrizni, hogy a kosárban már szerepel-e az adott termék.
        ///const existingItem:Ez a változó tárolja a kosárban található termék objektumát, ha van ilyen. Ha a termék már a kosárban van, akkor a find() visszaadja az objektumot, különben undefined lesz.
    
        if (existingItem) {//prevKosarlista megvizsgálja, hogy a kosárban már szerepel-e a hozzáadni kívánt termék 
          return prevKosarlista.map((elem) => 
            elem.id === adat.id
              ? { ...elem, db: elem.db + 1 } // Kosárbeli darabszám növelése
              : elem
          );
        } else {
          // Új termék hozzáadásakor alapértelmezett érték 1
          return [...prevKosarlista, { ...adat, db: 1 }];
        }
      });
    
      // Csökkentjük az eredeti készletet, ha hozzáadtunk a kosárhoz
      adat.db -= 1;
    }
    
  


  return (
      <KosarContext.Provider value={{ kosarba, kosarlista}}>
      {children}
      </KosarContext.Provider>//A KosarContext.Provider biztosítja, hogy a kosár funkciói és állapota (pl. kosarba, kosarlista) elérhető legyen az alkalmazás minden gyermek komponensében.
  );
  

}