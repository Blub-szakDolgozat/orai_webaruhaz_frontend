import {createContext, useEffect, useState } from "react"; 
import { myAxios } from "./MyAxios";

export const ApiContext=createContext("") //A React kontextust hoz létre, amely alapvetően egy globális állapotot biztosít az alkalmazás különböző komponensei számára. Itt üres stringet adunk meg alapértelmezett értékként.

export const ApiProvider=({children})=>{ //Ez a komponens felelős azért, hogy biztosítja a kontextust az alatta lévő komponensek számára 
    const [termekLista, setTermekLista] = useState([])
    const [katLista, setKatLista] = useState([]) // A termekLista és katLista két állapot, amely a termékek és kategóriák listáját tárolja. Az alapértékük üres tömb.

    const getAdat = async (vegpont,callbackfv)=>{
        try{
            const response = await myAxios.get(vegpont); // Ez egy aszinkron függvény, amely az Axios segítségével HTTP GET kérést küld az adott vegpont (végpont) URL-re.
            console.log(response)
            callbackfv(response.data) // callbackfv függvényt hívja meg, amely a válasz adatokat paraméterként kapja meg. Ez lehetővé teszi, hogy a válasz adatokat egy kívánt komponens állapotába helyezze el.
        }catch(err){
            console.log("Hiba történt az adatok lekérésekor.") // hiba esetén ezt írja ki.
        }finally{

        }
    };
    const deleteAdat = async (vegpont,id)=>{  //Ez a funkció töröl egy adott rekordot az id alapján. 
        try{
            const response = await myAxios.delete(vegpont+"/"+id); //	A sikeres törlés esetén a válasz adatokat naplózza
            console.log(response)

        }catch(err){
            console.log("Hiba történt az adatok törlésekor.")
        }finally{

        }
    }; 
    const putAdat = async (vegpont, id, adat) => {  //A PUT kérés frissíti egy meglévő rekord adatait az id alapján. A módosítandó adatokat az adat paraméter tartalmazza.
        try {
            const response = await myAxios.put(`${vegpont}/${id}`, adat);
            console.log("Sikeres módosítás:", response.data);
    
            // Frissítjük a termékek listáját a válasz alapján
            setTermekLista((prevTermekLista) => //	A sikeres módosítást követően a setTermekLista segítségével frissíti a termekLista állapotot, így az alkalmazás automatikusan tükrözi a módosított adatokat.
                prevTermekLista.map((item) =>
                    item.id === id ? { ...item, ...adat } : item
                )
            );
        } catch (err) {
            console.error("Hiba történt az adatok módosításakor:", err);
        }
    };

       const postAdat = async (endpoint, data) => { //	postAdat: A POST kérés új adatokat küld az API-nak a megadott endpoint címre. A data tartalmazza a küldendő adatokat.
        try {
            const response = await myAxios.post(endpoint, data);
            console.log("Feltöltve", response.data); // 	A sikeres válasz esetén a visszakapott adatokat naplózza és visszaadja, hogy más komponensek felhasználhassák.
            return response.data;
        } catch (error) {
            console.error("POST hiba:", error);
            throw error;
        }
    };

    useEffect(()=>{
        getAdat("/api/termekek",setTermekLista) // 	A useEffect hook akkor fut le, amikor a komponens először renderelődik. Ez a hook az API-ból letölti a termékek listáját (/api/termekek), és beállítja a termekLista állapotot a válasz alapján.
    },[]);
    return(
        <ApiContext.Provider value={{termekLista, setTermekLista, postAdat, katLista, setKatLista,putAdat, deleteAdat }}>
            {children}
        </ApiContext.Provider> // Az ApiContext.Provider biztosítja a kontextust az alkalmazás többi komponense számára. Az API-kapcsolódó funkciók és adatok (pl. termekLista, katLista, stb.) a kontextusban elérhetők lesznek a children komponensek számára, amelyek a ApiProvider köré épülnek.
    );
}
