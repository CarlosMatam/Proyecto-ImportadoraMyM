import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/Agentes/'


const MostrarAG = () => {

    const [search, setSearch] = useState("")

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

    //capturar valores input
    const searcher = (e) => {
        setSearch(e.target.value)

    }

    let resultado = []
    if (!search) {
        resultado = Agentes
    } else {
        resultado = Agentes.filter((dato) =>
            dato.NOMBRE.toLowerCase().includes(search.toLocaleLowerCase()));
    }


    return (
        <div className='container-fluid'>
            <label>Buscar por nombre: </label>
            <input type='text' placeholder='Digite el nombre' className='form-control' value={search} onChange={searcher} ></input>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'>Nuevo Registro</Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>

                                <th>NOMBRE</th>
                                <th>PRIMER APELLIDO</th>
                                <th>SEGUNDO APELLIDO</th>
                                <th>Provincia</th>
                                <th>TELEFONO</th>
                                <th>TELEFONO 2</th>
                                <th>COMISION</th>
                                <th>ZONA</th>
                                <th>CEDULA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {resultado.map((Agente) => (
                                <tr key={Agente.ID_AGENTE}>
                                    <td> {Agente.NOMBRE} </td>
                                    <td> {Agente.APELLIDO_PATERNO} </td>
                                    <td> {Agente.APELLIDO_MATERNO} </td>

                                    <td> {Agente.TAB_DIRECCIONES_AGENTES_VENTA.PROVINCIA} </td>
                                    <td> {Agente.TAB_TELEFONOS_AGENTES_VENTA.TELEFONO_1} </td>
                                    <td> {Agente.TAB_TELEFONOS_AGENTES_VENTA.TELEFONO_2} </td>
                                    <td> {Agente.COMISION_POR_VENTA} </td>
                                    <td> {Agente.TAB_ZONA.NOMBRE} </td>
                                    <td> {Agente.IDENTIFICACION} </td>
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