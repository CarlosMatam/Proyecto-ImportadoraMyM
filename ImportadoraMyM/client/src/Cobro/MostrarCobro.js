import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/Cobros/'


const MostrarCobro = () => {

    const [Cobros, setCobro] = useState([])
    useEffect(() => {
        getCobros()
    }, [])

    //procedimineto para mostrar todos los Agentes
    const getCobros = async () => {
        const res = await axios.get(URI)
        setCobro(res.data)
    }

    //procedimineto para eliminar un Agente
    const deleteCobro = async (ID_COBRO) => {
        await axios.delete(`${URI}${ID_COBRO}`)
        getCobros()
    }
    
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'>Nuevo Registro</Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                
                                <th>FECHA DE INGRESO</th>
                                <th>MONTO</th>
                                <th>ESTADO</th>
                                <th>ID CLIENTE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Cobros.map((Cobro) => (
                                <tr key={Cobro.ID_COBRO}>
                                    <td> {Cobro.FECHA_INGRESO} </td>
                                    <td> {Cobro.MONTO} </td>
                                    <td> {Cobro.ESTADO} </td>
                                    <td> {Cobro.ID_CLIENTE} </td>
                                    <td>
                                        
                                        <Link to={`/edit/${Cobro.ID_COBRO}`} className='btn btn-info'>Editar</Link>
                                        <button onClick={() => deleteCobro(Cobro.ID_COBRO)} className='btn btn-danger'>Eliminar</button>
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

export default MostrarCobro