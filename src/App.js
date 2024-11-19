import './App.css';
import Termek from './component/Termek';import Termekek from './component/Termekek';

function App() {
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
