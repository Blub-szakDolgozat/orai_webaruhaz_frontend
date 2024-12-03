import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Admin from './pages/Admin';
import Public from './pages/Public';
import NoPage from './pages/NoPAge';


function App() {

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
