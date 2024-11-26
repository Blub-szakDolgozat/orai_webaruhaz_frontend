import { useContext } from 'react';
import './App.css';
import Termekek from './component/admin/Termekek';
import { ApiContext } from './contexts/ApiContext'; 
import Kosar from './component/Kosar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Admin from './pages/Admin';
import Public from './pages/Public';
import NoPage from './pages/NoPAge';

function App() {
  const {termekLista}= useContext(ApiContext)
  return (
    <div className="App">
     
      <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Public />} />
                        <Route path="admin" element={<Admin />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>


      
    </div>
  );
}

export default App;
