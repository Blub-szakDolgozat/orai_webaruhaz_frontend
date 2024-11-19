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
    const deleteAdat = async (vegpont,id)=>{
        try{
            const response = await myAxios.delete(vegpont+"/"+id);
            console.log(response)

        }catch(err){
            console.log("Hiba történt az adatok törlésekor.")
        }finally{

        }
    };
    const putAdat = async (vegpont,id)=>{
        try{
            const response = await myAxios.put(vegpont+"/"+id);
            console.log(response)

        }catch(err){
            console.log("Hiba történt az adatok módosításakor.")
        }finally{

        }
    };
    const postAdat = async (vegpont, adat)=>{
        try{
            const response = await myAxios.post(vegpont, adat);
            console.log(response)
        }catch(err){
            console.log("Hiba történt az adatok küldésekor.")
        }finally{

        }
    };
    useEffect(()=>{
        getAdat("/products",setTermekLista)
        getAdat("/products/categories",setKatLista)
    },[]);
    return(
        <ApiContext.Provider value={{termekLista, setTermekLista, postAdat, katLista}}>
            {children}
        </ApiContext.Provider>
    );
}