import { useContext } from 'react';
import './App.css';
import Termekek from './component/Termekek';
import { ApiContext } from './contexts/ApiContext';

function App() {
  const {termekLista}= useContext(ApiContext)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Termékek: </h1>
        
      </header>
      <article><Termekek lista={termekLista}/>
      </article>
    </div>
  );
}

export default App;
