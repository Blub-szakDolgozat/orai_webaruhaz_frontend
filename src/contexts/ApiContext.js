import {createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext=createContext("")

export const ApiProvider=({children})=>{
    const [termekLista, setTermekLista] = useState([])
    const [katLista, setKatLista] = useState([])

    const getAdat = async (vegpont,callbackfv)=>{
        try{
            const response = await myAxios.get(vegpont);
            console.log(response)
            callbackfv(response.data)
        }catch(err){
            console.log("Hiba történt az adatok lekérésekor.")
        }finally{

        }
    };
    /*const deleteAdat = async (vegpont,id)=>{
        try{
            const response = await myAxios.delete(vegpont+"/"+id);
            console.log(response)

        }catch(err){
            console.log("Hiba történt az adatok törlésekor.")
        }finally{

        }
    }; /// Nem müködik*/
    const putAdat = async (vegpont, id, adat) => {
        try {
            const response = await myAxios.put(`${vegpont}/${id}`, adat);
            console.log("Sikeres módosítás:", response.data);
    
            // Frissítjük a termékek listáját a válasz alapján
            setTermekLista((prevTermekLista) =>
                prevTermekLista.map((item) =>
                    item.id === id ? { ...item, ...adat } : item
                )
            );
        } catch (err) {
            console.error("Hiba történt az adatok módosításakor:", err);
        }
    };

       const postAdat = async (endpoint, data) => {
        try {
            const response = await myAxios.post(endpoint, data);
            console.log("Feltöltve", response.data);
            return response.data;
        } catch (error) {
            console.error("POST hiba:", error);
            throw error;
        }
    };

    useEffect(()=>{
        getAdat("/api/termekek",setTermekLista)
    },[]);
    return(
        <ApiContext.Provider value={{termekLista, setTermekLista, postAdat, katLista, setKatLista,putAdat }}>
            {children}
        </ApiContext.Provider>
    );
}