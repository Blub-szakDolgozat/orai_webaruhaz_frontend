import { useContext } from 'react';
import './App.css';
import Termekek from './component/public/Termekek';
import { ApiContext } from './contexts/ApiContext'; 

function App() {
  const {termekLista}= useContext(ApiContext)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Termékek: </h1>
      </header>
      <article>
        <Termekek />
      </article>
      <footer>
        <p>@ Horváth Nauzika, Dobszay Dorka, Albert Orsolya</p>
      </footer>
    </div>
  );
}

export default App;
