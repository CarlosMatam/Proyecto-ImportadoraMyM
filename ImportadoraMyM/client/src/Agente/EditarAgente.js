import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/Agentes/'

const EditarAgente = () => {
    const [NOMBRE, setNombre] = useState('')
    const [APELLIDO_PATERNO, setApellido_paterno] = useState('')
    const [APELLIDO_MATERNO, setApellido_materno] = useState('')
    const [ID_DIRECCION, setId_direccion] = useState('')
    const [ID_TELEFONO, setId_telefono] = useState('')
    const [COMISION_POR_VENTA, setComision_por_venta] = useState('')
    const [ID_ZONA, setId_zona] = useState('')
    const navigate = useNavigate()
    const {ID_AGENTE} = useParams()

   
    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+ID_AGENTE, {
            NOMBRE: NOMBRE, APELLIDO_PATERNO: APELLIDO_PATERNO, APELLIDO_MATERNO: APELLIDO_MATERNO, ID_DIRECCION: ID_DIRECCION, ID_TELEFONO: ID_TELEFONO, COMISION_POR_VENTA: COMISION_POR_VENTA, ID_ZONA: ID_ZONA
        })
        navigate('/')
    }

    

    useEffect(() => {
        getAgenteById()
    }, [])

    const getAgenteById = async () => {
        const res = await axios.get(URI + ID_AGENTE)
        setNombre(res.data.NOMBRE)
        setApellido_paterno(res.data.APELLIDO_PATERNO)
        setApellido_materno(res.data.APELLIDO_MATERNO)
        setId_direccion(res.data.ID_DIRECCION)
        setId_telefono(res.data.ID_TELEFONO)
        setComision_por_venta(res.data.COMISION_POR_VENTA)
        setId_zona(res.data.ID_ZONA)
    }

    return (
        <div>
            <h3>Edit POST</h3>
            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                        value={NOMBRE}
                        onChange={(e) => setNombre(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Primer Apellido</label>
                    <textarea
                        value={APELLIDO_PATERNO}
                        onChange={(e) => setApellido_paterno(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Segundo Apellido</label>
                    <textarea
                        value={APELLIDO_MATERNO}
                        onChange={(e) => setApellido_materno(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>ID Dirección</label>
                    <textarea
                        value={ID_DIRECCION}
                        onChange={(e) => setId_direccion(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>ID Teléfono</label>
                    <textarea
                        value={ID_TELEFONO}
                        onChange={(e) => setId_telefono(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Comisión por venta</label>
                    <textarea
                        value={COMISION_POR_VENTA}
                        onChange={(e) => setComision_por_venta(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>ID Zona</label>
                    <textarea
                        value={ID_ZONA}
                        onChange={(e) => setId_zona(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <button type="submit" className="btn btn-primary">Actualizar</button>
            </form>
        </div>
    )
    

}

export default EditarAgente