import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const URI = 'http://localhost:8000/Cobros/'

const CrearCobro = () => {
    
    const [FECHA_INGRESO, setFecha_ingreso] = useState('')
    const [MONTO, setMonto] = useState('')
    const [ESTADO, setEstado] = useState('')
    const [ID_CLIENTE, setId_cliente] = useState('')
    const navigate = useNavigate()

    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { FECHA_INGRESO: FECHA_INGRESO, MONTO: MONTO, ESTADO: ESTADO, ID_CLIENTE: ID_CLIENTE })
        navigate('/Cobros')
    }

    return (
       
        <form className="row g-3" onSubmit={store}  >
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
                <label className="form-label">ID Cliente</label>
                    <input
                        value={ID_CLIENTE}
                        onChange={(e) => setId_cliente(e.target.value)}
                        type="text"
                        className='form-control'
                    required/>
                    
                </div>
            
            <div className="col-12">
                    <button type="submit" class="btn btn-primary">Crear </button>
                </div>
            </form>

        
    )
}

export default CrearCobro