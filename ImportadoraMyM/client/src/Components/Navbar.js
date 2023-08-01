import React from "react";
import {Link} from 'react-router-dom';
import '../CSS/Navbar.css';

function Navbar(){
    return(
        <nav>
            <ul className="container">
                <li><Link to="/">Agentes de Ventas</Link></li>
                <li><Link to="/Clientes">Clientes</Link></li>
                <li><Link to="/Proveedores">Proveedores</Link></li>
                <li><Link to="/Transportes">Transportes</Link></li>
                <li><Link to="/Cobros">Cobros</Link></li>
                <li><Link to="/Pagos">Pagos</Link></li>
                <li><Link to="/Productos">Productos</Link></li>
                <li><Link to="/Cabys">CABYS</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;