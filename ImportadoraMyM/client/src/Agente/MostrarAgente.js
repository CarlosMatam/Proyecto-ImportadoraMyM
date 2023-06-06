import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/Agentes/'


const MostrarAG = () => {

    const [Agentes, setAgente] = useState([])
    useEffect(() => {
        getAgentes()
    }, [])

    //procedimineto para mostrar todos los Agentes
    const getAgentes = async () => {
        const res = await axios.get(URI)
        setAgente(res.data)
    }

    //procedimineto para eliminar un Agente
    const deleteAgente = async (ID_AGENTE) => {
        await axios.delete(`${URI}${ID_AGENTE}`)
        getAgentes()
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
                                <th>PRIMER APELLIDO</th>
                                <th>SEGUNDO APELLIDO</th>
                                <th>ID DIRECCION</th>
                                <th>ID TELEFONO</th>
                                <th>COMISION</th>
                                <th>ID ZONA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Agentes.map((Agente) => (
                                <tr key={Agente.ID_AGENTE}>
                                    <td> {Agente.NOMBRE} </td>
                                    <td> {Agente.APELLIDO_PATERNO} </td>
                                    <td> {Agente.APELLIDO_MATERNO} </td>
                                    <td> {Agente.ID_DIRECCION} </td>
                                    <td> {Agente.ID_TELEFONO} </td>
                                    <td> {Agente.COMISION_POR_VENTA} </td>
                                    <td> {Agente.ID_ZONA} </td>
                                    <td>
                                        
                                        <Link to={`/edit/${Agente.ID_AGENTE}`} className='btn btn-info'>Editar</Link>
                                        <button onClick={() => deleteAgente(Agente.ID_AGENTE)} className='btn btn-danger'>Eliminar</button>
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

export default MostrarAG