import { createContext, useState, } from "react";

export const KosarContext = createContext("");

export const KosarProvider = ({ children }) => {
    const [kosarlista, setkosarlista] = useState([]);


  return (
      <KosarContext.Provider value={{kosarlista}}>
      {children}
      </KosarContext.Provider>
  );
  

}