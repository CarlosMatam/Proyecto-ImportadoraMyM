import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/Pagos/'


const MostrarPago = () => {

    const [Pagos, setPago] = useState([])
    useEffect(() => {
        getPagos()
    }, [])

    //procedimineto para mostrar todos los Agentes
    const getPagos = async () => {
        const res = await axios.get(URI)
        setPago(res.data)
    }

    //procedimineto para eliminar un Agente
    const deletePago = async (ID_PAGO) => {
        await axios.delete(`${URI}${ID_PAGO}`)
        getPagos()
    }
    
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/Pagos/create" className='btn btn-primary mt-2 mb-2'>Nuevo Registro</Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                
                                <th>FECHA DE INGRESO</th>
                                <th>MONTO</th>
                                
                                <th>ID PROVEEDOR</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Pagos.map((Pago) => (
                                <tr key={Pago.ID_PAGO}>
                                    <td> {Pago.FECHA_INGRESO} </td>
                                    <td> {Pago.MONTO} </td>
                                 
                                    <td> {Pago.ID_PROVEEDOR} </td>
                                    <td>
                                        
                                        <Link to={`/Pagos/edit/${Pago.ID_PAGO}`} className='btn btn-info'>Editar</Link>
                                        <button onClick={() => deletePago(Pago.ID_PAGO)} className='btn btn-danger'>Eliminar</button>
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

export default MostrarPago