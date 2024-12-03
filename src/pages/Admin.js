import React, { useContext } from 'react'
import { ApiContext } from '../contexts/ApiContext'
import Termekek from '../component/admin/Termekek'
import UrlapPublic from '../component/public/UrlapPublic'


export default function Admin() {
  const {termekLista}= useContext(ApiContext) //ennek a segítségével hozzáférést kap az ApiContext-ben levő termekListához. A termékLista a termékeket tárolja, objektumként adja vissza az useContext.
  return ( //jsx szintaxissal van felépítve a a komponensek megjelenése
    <div>
      <main>
        <aside>
            <UrlapPublic /> 
        </aside>
      <article>        
          <Termekek termekLista={termekLista}/>
        </article>
      </main>
    </div>
  )

  //aside: az UrlapPublic egy ürlapot tartalmaz ami itt az admin felületen jelik meg.
  //article: A Termekek komponenst tartalmazza. A termekLista prop-ot átadjuk a Termekek komponensnek, ami a termékek listát jeleníti meg, és annak adatát tertalmazza.
}