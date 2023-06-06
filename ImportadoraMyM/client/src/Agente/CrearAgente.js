import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const URI = 'http://localhost:8000/Agentes/'

const CrearAgente = () => {
    
    const [NOMBRE, setNombre] = useState('')
    const [APELLIDO_PATERNO, setApellido_paterno] = useState('')
    const [APELLIDO_MATERNO, setApellido_materno] = useState('')
    const [ID_DIRECCION, setId_direccion] = useState('')
    const [ID_TELEFONO, setId_telefono] = useState('')
    const [COMISION_POR_VENTA, setComision_por_venta] = useState('')
    const [ID_ZONA, setId_zona] = useState('')
    const navigate = useNavigate()

    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { NOMBRE: NOMBRE, APELLIDO_PATERNO: APELLIDO_PATERNO, APELLIDO_MATERNO: APELLIDO_MATERNO, ID_DIRECCION: ID_DIRECCION, ID_TELEFONO: ID_TELEFONO, COMISION_POR_VENTA: COMISION_POR_VENTA, ID_ZONA: ID_ZONA })
        navigate('/')
    }

    return (
       
        <form className="row g-3" onSubmit={store}  >
                <div class="col-md-6">
                    <label  className="form-label">Nombre</label>
                    <input
                        value={NOMBRE}
                        onChange={(e) => setNombre(e.target.value)}
                        type="text"
                        className='form-control'
                    required/>
                   
                </div>
            <div className="col-md-6">
                    <label class="form-label">Primer Apellido</label>
                    <input
                        value={APELLIDO_PATERNO}
                        onChange={(e) => setApellido_paterno(e.target.value)}
                        type="text"
                        className='form-control'
                    required/>
                </div>
            <div className="col-12">
                <label className="form-label">Segudno Apellido</label>
                    <input
                        value={APELLIDO_MATERNO}
                        onChange={(e) => setApellido_materno(e.target.value)}
                        type="text"
                        className='form-control'
                    required />
                    
                </div>
            <div className="col-12">
                <label className="form-label">ID Direccion</label>
                    <input
                        value={ID_DIRECCION}
                        onChange={(e) => setId_direccion(e.target.value)}
                        type="text"
                        className='form-control'
                    required/>
                    
                </div>
            <div className="col-md-6">
                <label className="form-label">ID Telefono</label>
                    <input
                        value={ID_TELEFONO}
                        onChange={(e) => setId_telefono(e.target.value)}
                        type="text"
                        className='form-control'
                    required/>
                   
                </div>
            <div className="col-md-4">
                <label className="form-label">Comision</label>
                    <input
                        value={COMISION_POR_VENTA}
                        onChange={(e) => setComision_por_venta(e.target.value)}
                        type="text"
                        className='form-control'
                    required/>
                </div>
            <div className="col-md-2">
                <label className="form-label">ID Zona</label>
                    <input
                        value={ID_ZONA}
                        onChange={(e) => setId_zona(e.target.value)}
                        type="text"
                        className='form-control'
                    required />
                </div>
               
            <div className="col-12">
                    <button type="submit" class="btn btn-primary">Crear </button>
                </div>
            </form>

        
    )
}

export default CrearAgente