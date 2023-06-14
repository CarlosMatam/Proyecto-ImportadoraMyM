import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const URI = 'http://localhost:8000/Agentes/'
const URI2 = 'http://localhost:8000/Zonas/'
const URI3 = 'http://localhost:8000/DireccionesAgente/'
const URI4 = 'http://localhost:8000/TelefonosAgente/'


const CrearAgente = () => {

    const [Zonas, setZona] = useState([])
    useEffect(() => {
        getZonas()
    }, [])

    //procedimineto para mostrar todos lAS ZONAS
    const getZonas = async () => {
        const res = await axios.get(URI2)
        setZona(res.data)
    }

    


    const [NOMBRE, setNombre] = useState('')
    const [APELLIDO_PATERNO, setApellido_paterno] = useState('')
    const [APELLIDO_MATERNO, setApellido_materno] = useState('')
    const [COMISION_POR_VENTA, setComision_por_venta] = useState('')
    const [ID_ZONA, setId_zona] = useState('')
    const [IDENTIFICACION, setIdentificacion] = useState('')


    const [PROVINCIA, setProvincia] = useState('')
    const [CANTON, setCanton] = useState('')
    const [DISTRITO, setDistrito] = useState('')
    const [BARRIO, setBarrio] = useState('')
    const [OTRAS_SENNAS, setOtras_sennas] = useState('')

    const [TELEFONO_1, setTelefono_1] = useState('')
    const [TELEFONO_2, setTelefono_2] = useState('')
    const [TELEFONO_3, setTelefono_3] = useState('')
    


    const navigate = useNavigate()

    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        
        const agenteDeVentasResponse = await axios.post(URI, { NOMBRE: NOMBRE, APELLIDO_PATERNO: APELLIDO_PATERNO, APELLIDO_MATERNO: APELLIDO_MATERNO, COMISION_POR_VENTA: COMISION_POR_VENTA, ID_ZONA: ID_ZONA, IDENTIFICACION: IDENTIFICACION })


        
        const ID_AGENTE = agenteDeVentasResponse.data.ID_AGENTE;
      

        await axios.post(URI3, { PROVINCIA: PROVINCIA, CANTON: CANTON, DISTRITO: DISTRITO, BARRIO: BARRIO, OTRAS_SENNAS: OTRAS_SENNAS, ID_AGENTE: ID_AGENTE })

        await axios.post(URI4, { TELEFONO_1: TELEFONO_1, TELEFONO_2: TELEFONO_2, TELEFONO_3: TELEFONO_3, ID_AGENTE: ID_AGENTE  })

        navigate('/')
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
            <div className="col-md-6">
                <label className="form-label">Primer Apellido</label>
                <input
                    value={APELLIDO_PATERNO}
                    onChange={(e) => setApellido_paterno(e.target.value)}
                    type="text"
                    className='form-control'
                    required />
            </div>
            <div className="col-12">
                <label className="form-label">Segundo Apellido</label>
                <input
                    value={APELLIDO_MATERNO}
                    onChange={(e) => setApellido_materno(e.target.value)}
                    type="text"
                    className='form-control'
                    required />

            </div>
          
            <div className="col-md-4">
                <label className="form-label">Comisión</label>
                <input
                    value={COMISION_POR_VENTA}
                    onChange={(e) => setComision_por_venta(e.target.value)}
                    type="text"
                    className='form-control'
                    required />
            </div>


            <div className="col-md-2">
                <label className="form-label">Cedula</label>
                <input
                    value={IDENTIFICACION}
                    onChange={(e) => setIdentificacion(e.target.value)}
                    type="text"
                    className='form-control'
                    required />
            </div>


            <select value={ID_ZONA} onChange={(e) => setId_zona(e.target.value)}>
                {Zonas.map((option) => (
                    <option key={option.ID_ZONA} value={option.ID_ZONA} >{option.NOMBRE}</option>
                ))}
            </select>


            <div className="col-md-2">
                <label className="form-label">PROVINCIA</label>
                <input
                    value={PROVINCIA}
                    onChange={(e) => setProvincia(e.target.value)}
                    type="text"
                    className='form-control'
                    required />
            </div>

            <div className="col-md-2">
                <label className="form-label">CANTON</label>
                <input
                    value={CANTON}
                    onChange={(e) => setCanton(e.target.value)}
                    type="text"
                    className='form-control'
                    required />
            </div>

            <div className="col-md-2">
                <label className="form-label">DISTRITO</label>
                <input
                    value={DISTRITO}
                    onChange={(e) => setDistrito(e.target.value)}
                    type="text"
                    className='form-control'
                    required />
            </div>

            <div className="col-md-2">
                <label className="form-label">BARRIO</label>
                <input
                    value={BARRIO}
                    onChange={(e) => setBarrio(e.target.value)}
                    type="text"
                    className='form-control'
                    required />
            </div>

            <div className="col-md-2">
                <label className="form-label">OTRAS_SENNAS</label>
                <input
                    value={OTRAS_SENNAS}
                    onChange={(e) => setOtras_sennas(e.target.value)}
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

export default CrearAgente


