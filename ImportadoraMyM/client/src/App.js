import logo from './logo.jpeg';
import './App.css';

//importamos los componentes
import MostrarAG from './Agente/MostrarAgente'; 
import CrearAgente from './Agente/CrearAgente'; 
import EditarAgente from './Agente/EditarAgente'; 

import MostrarProveedor from './Proveedor/MostrarProveedor'; 

import MostrarCobro from './Cobro/MostrarCobro'; 
import CrearCobro from './Cobro/CrearCobro'; 

import MostrarPago from './Pago/MostrarPago';
import CrearPago from './Pago/CrearPago';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"/"} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/Cobros' element={<MostrarCobro />} />
          <Route path='/Cobros/create' element={<CrearCobro />} />
          <Route path='/Pagos' element={<MostrarPago />} />
          <Route path='/Pagos/create' element={<CrearPago />} />
          <Route path='/Proveedores' element={<MostrarProveedor />} />
          <Route path='/' element={<MostrarAG/>} />
          <Route path='/create' element={<CrearAgente />} />
          <Route path='/edit/:ID_AGENTE' element={<EditarAgente />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;