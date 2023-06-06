import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const URI = 'http://localhost:8000/Proveedores/'

const CrearProveedor = () => {
    
    const [NOMBRE, setNombre] = useState('')
    const navigate = useNavigate()

    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { NOMBRE: NOMBRE})
        navigate('/')
    }

    return (
       
        <form className="row g-3" onSubmit={store}  >
            <div class="col-md-6">
                <label  className="form-label">Nombre</label>
                <input
                    value={NOMBRE}
                    onChange={(e) => setNombre(e.target.value)}
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

export default CrearProveedor