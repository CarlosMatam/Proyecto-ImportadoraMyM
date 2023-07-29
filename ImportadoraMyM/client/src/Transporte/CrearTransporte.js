import '../CSS/EstilosCrear.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const URI = 'http://localhost:8000/Transportes/'
const URI2 = 'http://localhost:8000/TelefonosTrans/'


const CrearTransporte = () => {

    const [NOMBRE, setNombre] = useState('')

    const [TELEFONO_1, setTelefono_1] = useState('')
    const [TELEFONO_2, setTelefono_2] = useState('')
    const [TELEFONO_3, setTelefono_3] = useState('')
    


    const navigate = useNavigate()

    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        
        const transporteResponse = await axios.post(URI, { NOMBRE: NOMBRE})


        
        const ID_TRANSPORTE = transporteResponse.data.ID_TRANSPORTE;
      
        await axios.post(URI2, { TELEFONO_1: TELEFONO_1, TELEFONO_2: TELEFONO_2, TELEFONO_3: TELEFONO_3, ID_TRANSPORTE: ID_TRANSPORTE  })

        navigate('/Transportes')
    }

    return (

        <form className="row g-3" onSubmit={store}  >
            <div className="col-md-6">
                <label className="form-label">Nombre</label>
                <input
                    value={NOMBRE}
                    onChange={(e) => setNombre(e.target.value)}
                    type="text"
                    className='form-control'
                    required />

            </div>
            
            <div className="col-md-2">
                <label className="form-label">TELEFONO_1</label>
                <input
                    value={TELEFONO_1}
                    onChange={(e) => setTelefono_1(e.target.value)}
                    type="text"
                    className='form-control'
                    required />
            </div>

            <div className="col-md-2">
                <label className="form-label">TELEFONO_2</label>
                <input
                    value={TELEFONO_2}
                    onChange={(e) => setTelefono_2(e.target.value)}
                    type="text"
                    className='form-control'
                    required />
            </div>


            <div className="col-md-2">
                <label className="form-label">TELEFONO_3</label>
                <input
                    value={TELEFONO_3}
                    onChange={(e) => setTelefono_3(e.target.value)}
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

export default CrearTransporte


