import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/Proveedores/'

const EditarAgente = () => {
    const [NOMBRE, setNombre] = useState('')
    const navigate = useNavigate()
    const {ID_PROVEEDOR} = useParams()

   
    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+ID_PROVEEDOR, {
            NOMBRE: NOMBRE
        })
        navigate('/')
    }

    

    useEffect(() => {
        getProveedorById()
    }, [])

    const getProveedorById = async () => {
        const res = await axios.get(URI + ID_PROVEEDOR)
        setNombre(res.data.NOMBRE)
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
                <button type="submit" className="btn btn-primary">Actualizar</button>
            </form>
        </div>
    )
    

}

export default EditarProveedor