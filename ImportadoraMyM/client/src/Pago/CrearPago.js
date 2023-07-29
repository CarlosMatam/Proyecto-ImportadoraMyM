import '../CSS/EstilosCrear.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'


const URI = 'http://localhost:8000/Pagos/'
const URI2 = 'http://localhost:8000/Proveedores/'

const CrearPago = () => {
    
    
    const [Proveedores, setProveedor] = useState([])
    useEffect(() => {
        getProveedores()
    }, [])

    //procedimineto para mostrar todos los tipos de cedula
    const getProveedores = async () => {
        const res = await axios.get(URI2)
        setProveedor(res.data)
    }

    const [FECHA_INGRESO, setFecha_ingreso] = useState('')
    const [MONTO, setMonto] = useState('')
    const [ESTADO, setEstado] = useState('')
    const [ID_PROVEEDOR, setId_proveedor] = useState('')
    const navigate = useNavigate()

    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { FECHA_INGRESO: FECHA_INGRESO, MONTO: MONTO, ESTADO: ESTADO, ID_PROVEEDOR: ID_PROVEEDOR })
        navigate('/Pagos')
    }

    return (
       
        <form className="row g-3" onSubmit={store}  >
            <Navbar />
                <div class="col-md-6">
                    <label  className="form-label">Fecha de ingreso</label>
                    <input
                        value={FECHA_INGRESO}
                        onChange={(e) => setFecha_ingreso(e.target.value)}
                        type="date"
                        className='form-control'
                    required/>
                   
                </div>
            <div className="col-md-6">
                    <label class="form-label">Monto</label>
                    <input
                        value={MONTO}
                        onChange={(e) => setMonto(e.target.value)}
                        type="text"
                        className='form-control'
                    required/>
                </div>
            <div className="col-12">
                <label className="form-label">Estado</label>
                    <input
                        value={ESTADO}
                        onChange={(e) => setEstado(e.target.value)}
                        type="text"
                        className='form-control'
                    required />
                    
                </div>
            <div className="col-12">
                <label className="form-label">ID Proveedor</label>
                    <input
                        value={ID_PROVEEDOR}
                        onChange={(e) => setId_proveedor(e.target.value)}
                        type="text"
                        className='form-control'
                    required/>
                    
                </div>
            <select value={ID_PROVEEDOR} onChange={(e) => setId_proveedor(e.target.value)}>
                {Proveedores.map((option) => (
                    <option key={ID_PROVEEDOR} value={option.ID_PROVEEDOR} >{option.NOMBRE}</option>
                ))}
            </select>
            
            <div className="col-12">
                    <button type="submit" class="btn btn-primary">Crear </button>
                </div>
            </form>

        
    )
}

export default CrearPago