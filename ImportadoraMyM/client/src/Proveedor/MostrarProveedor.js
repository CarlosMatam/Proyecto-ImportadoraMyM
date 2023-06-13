import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/Proveedores/'


const MostrarProveedor = () => {

    const [Proveedores, setProveedor] = useState([])
    useEffect(() => {
        getProveedores()
    }, [])

    //procedimineto para mostrar todos los Agentes
    const getProveedores = async () => {
        const res = await axios.get(URI)
        setProveedor(res.data)
    }

    //procedimineto para eliminar un Agente
    const deleteProveedor = async (ID_PROVEEDOR) => {
        await axios.delete(`${URI}${ID_PROVEEDOR}`)
        getProveedores()
    }
    
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'>Nuevo Registro</Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                
                                <th>NOMBRE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Proveedores.map((Proveedor) => (
                                <tr key={Proveedor.ID_PROVEEDOR}>
                                    <td> {Proveedor.NOMBRE} </td>
                                    <td>
                                        
                                        <Link to={`/edit/${Proveedor.ID_PROVEEDOR}`} className='btn btn-info'>Editar</Link>
                                        <button onClick={() => deleteProveedor(Proveedor.ID_PROVEEDOR)} className='btn btn-danger'>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


            
        </div>

        
    )

}

export default MostrarProveedor