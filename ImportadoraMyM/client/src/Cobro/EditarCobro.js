import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/Cobros/'

const EditarCobro = () => {
    const [FECHA_INGRESO, setFecha_ingreso] = useState('')
    const [MONTO, setMonto] = useState('')
    const [ESTADO, setEstado] = useState('')
    const [ID_CLIENTE, setId_cliente] = useState('')
    const navigate = useNavigate()
    const {ID_COBRO} = useParams()

   
    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+ID_COBRO, {
            FECHA_INGRESO: FECHA_INGRESO, MONTO: MONTO, ESTADO: ESTADO, ID_CLIENTE: ID_CLIENTE
        })
        navigate('/Cobros')
    }

    

    useEffect(() => {
        getCobroById()
    }, [])

    const getCobroById = async () => {
        const res = await axios.get(URI + ID_COBRO)
        setFecha_ingreso(res.data.FECHA_INGRESO)
        setMonto(res.data.MONTO)
        setEstado(res.data.ESTADO)
        setId_cliente(res.data.ID_CLIENTE)
    }

    return (
        <div>
            <h3>Edit POST</h3>
            <form onSubmit={update}>
            <div class="col-md-6">
                    <label  className="form-label">Fecha de ingreso</label>
                    <input
                        value={FECHA_INGRESO}
                        onChange={(e) => setFecha_ingreso(e.target.value)}
                        type="text"
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
                <label className="form-label">ID Cliente</label>
                    <input
                        value={ID_CLIENTE}
                        onChange={(e) => setId_cliente(e.target.value)}
                        type="text"
                        className='form-control'
                    required/>
                    
                </div>
                <button type="submit" className="btn btn-primary">Actualizar</button>
            </form>
        </div>
    )
    

}

export default EditarCobro