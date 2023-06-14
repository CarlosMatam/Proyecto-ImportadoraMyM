import logo from './logo.jpeg';
import './App.css';

//importamos los componentes
import MostrarAG from './Agente/MostrarAgente'; 
import CrearAgente from './Agente/CrearAgente'; 
import EditarAgente from './Agente/EditarAgente'; 
import MostrarProveedores from './Proveedor/MostrarProveedor'; 
import MostrarCobro from './Cobro/MostrarCobro'; 
import CrearCobro from './Cobro/CrearCobro'; 
import EditarCobro from './Cobro/EditarCobro';
import MostrarPago from './Pago/MostrarPago';
import CrearPago from './Pago/CrearPago';
import EditarPago from './Pago/EditarPago';
import CrearProveedor from './Proveedor/CrearProveedor'; 
import EditarProveedor from './Proveedor/EditarProveedor';
import CrearTransporte from './Transporte/CrearTransporte';
import EditarTransporte from './Transporte/EditarTransporte';
import MostrarTransporte from './Transporte/MostrarTransporte';

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
          <Route path='/Cobros/edit/:ID_COBRO' element={<EditarCobro />} />
          <Route path='/Pagos' element={<MostrarPago />} />
          <Route path='/Pagos/create' element={<CrearPago />} />
          <Route path='/Pagos/edit/:ID_PAGO' element={<EditarPago />} />
          <Route path='/Proveedores' element={<MostrarProveedores/>} />
          <Route path='/' element={<MostrarAG/>} />
          <Route path='/create' element={<CrearAgente />} />
          <Route path='/Proveedores/create' element={<CrearProveedor />} />
          <Route path='/edit/:ID_AGENTE' element={<EditarAgente />} />
          <Route path='/Proveedores/edit/:ID_PROVEEDOR' element={<EditarProveedor />} />
          <Route path='/Transportes' element={<MostrarTransporte/>}/>
          <Route path='/Transportes/create' element={<CrearTransporte/>}/>
          <Route path='/Transportes/edit/:ID_TRANSPORTE' element={<EditarTransporte/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;