import { useContext, useState } from "react";
import { ApiContext } from "../../contexts/ApiContext";
import { Button, Form } from "react-bootstrap";


export default function UrlapPublic(){
    const {postAdat} = useContext(ApiContext);
    // Az űrlapadatokhoz zartozik egy saját state, itt fogjuk tárolni az űrlapmező adatait.
    const [adat, setAdat]=useState({
        cim: "Ez a termék neve",
        ar: '',
        category: '',
        leiras: '',
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
        postAdat("/termekAdd", adat)
    }

    return (
        <div className="container">
          <h2 className="my-4 text-center">Új Termék Felvétele</h2>
          <Form onSubmit={elkuld}>
            
            <Form.Group className="mb-3" controlId="cim">
              <Form.Label>A termék neve</Form.Label>
              <Form.Control
                type="text"
                value={adat.cim}
                onChange={valtoztatasKezeles}
                placeholder="Adja meg a termék nevét"
              />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="ar">
              <Form.Label>A termék ára</Form.Label>
              <Form.Control
                type="number"
                min="1000"
                max="1000000"
                value={adat.ar}
                onChange={valtoztatasKezeles}
                placeholder="Adja meg a termék árát"
              />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="leiras">
              <Form.Label>A termék leírása</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={adat.leiras}
                onChange={valtoztatasKezeles}
                placeholder="Írja le a terméket"
              />
            </Form.Group>
    

    
            <div className="d-flex justify-content-center">
  <Button variant="primary" type="submit" size="sm">
    Termék hozzáadása
  </Button>
</div>

          </Form>
        </div>
      );
    
}