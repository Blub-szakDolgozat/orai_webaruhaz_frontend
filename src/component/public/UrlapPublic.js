import { useContext, useState } from "react";
import { ApiContext } from "../../contexts/ApiContext";


export default function UrlapPublic(){
    const {postAdat} = useContext(ApiContext);
    // Az űrlapadatokhoz zartozik egy saját state, itt fogjuk tárolni az űrlapmező adatait.
    const [adat, setAdat]=useState({
        title: "Ez a termék neve",
        price: '',
        category: '',
        description: '',
        image:''
    })

    function valtoztatasKezeles(event){
        // Az inputba beírt adatokkal kell frissíteni az objektumunkat
        const sObj={...adat}
        sObj[event.target.id]=event.target.value
        setAdat({...sObj})
    }

    function elkuld(event){
        event.preventDefault() // <-- leszedjük az alapértelmezett eseménykezelőt
        // Összegyűjtük az adatokat az űrlap mezőről és összeállítunk egy objektumot. Ezt az objektumot küldük el a post kéréssel a végpontra.
        console.log("Elküld")
        // Itt kellene validálni az adatokat és csak akkor elküldeni, ha formailag helyes:
        postAdat("/products", adat)
    }

    return(
        <div>
        <form onSubmit={elkuld}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">A termék neve</label>
                <input type="text" className="form-control" value={adat.title} onChange={valtoztatasKezeles} id="title" pattern='' aria-describedby="titleHelp"></input>
            </div>

            <div className="mb-3">
                <label htmlFor="price" className="form-label">A termék ára</label>
                <input type="number" min='1000' max='1000000' className="form-control" value={adat.price} onChange={valtoztatasKezeles} id="price" aria-describedby="priceHelp"></input>
            </div>

            <div className="mb-3">
                <label htmlFor="description" className="form-label">A termék leírása</label>
                <input type="text" className="form-control" value={adat.description} onChange={valtoztatasKezeles} id="description" aria-describedby="descriptionHelp"></input>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    )
}