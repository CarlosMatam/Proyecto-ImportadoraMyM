import logo from './logo.jpeg';
import './App.css';

//importamos los componentes
import MostrarAG from './Agente/MostrarAgente'; 
import CrearAgente from './Agente/CrearAgente'; 
import EditarAgente from './Agente/EditarAgente'; 

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MostrarAG />} />
          <Route path='/create' element={<CrearAgente />} />
          <Route path='/edit/:ID_AGENTE' element={<EditarAgente />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;