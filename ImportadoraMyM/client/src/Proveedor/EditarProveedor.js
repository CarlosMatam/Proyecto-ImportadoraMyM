import '../CSS/EstilosEditar.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from '../Components/Navbar';


const URI = 'http://localhost:8000/Proveedores/'
const URI2 = 'http://localhost:8000/TipoCedula/'
const URI3 = 'http://localhost:8000/DireccionesProvee/'
const URI4 = 'http://localhost:8000/TelefonosProvee/'


const EditarProveedor = () => {

    const [NOMBRE, setNombre] = useState('')
    const [CORREO, setCorreo] = useState('')
    const [TIPO_CEDULA, setTipo_cedula] = useState('')
    const [CEDULA, setCedula] = useState('')



    const [PROVINCIA, setProvincia] = useState('')
    const [CANTON, setCanton] = useState('')
    const [DISTRITO, setDistrito] = useState('')
    const [BARRIO, setBarrio] = useState('')
    const [OTRAS_SENNAS, setOtras_sennas] = useState('')

    const [TELEFONO_1, setTelefono_1] = useState('')
    const [TELEFONO_2, setTelefono_2] = useState('')
    const [TELEFONO_3, setTelefono_3] = useState('')
    const navigate = useNavigate()
    const { ID_PROVEEDOR } = useParams()


    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault();

        // Actualizar el agente
        await axios.put(URI + ID_PROVEEDOR, {
            NOMBRE: NOMBRE,
            CORREO: CORREO,
            TIPO_CEDULA: TIPO_CEDULA,
            CEDULA: CEDULA,
          
        });

        // Actualizar los teléfonos
        await axios.put(URI4 + ID_PROVEEDOR, {
            TELEFONO_1: TELEFONO_1,
            TELEFONO_2: TELEFONO_2,
            TELEFONO_3: TELEFONO_3
        });

        // Actualizar las direcciones
        await axios.put(URI3 + ID_PROVEEDOR, {
            PROVINCIA: PROVINCIA,
            CANTON: CANTON,
            DISTRITO: DISTRITO,
            BARRIO: BARRIO,
            OTRAS_SENNAS: OTRAS_SENNAS
        });

        navigate('/Proveedores');
    };



    useEffect(() => {
        getProveedorById()
    }, [])

    const getProveedorById = async () => {
        const res = await axios.get(URI + ID_PROVEEDOR);
        setNombre(res.data.NOMBRE);
        setCorreo(res.data.CORREO);
        setTipo_cedula(res.data.TIPO_CEDULA);
        setCedula(res.data.CEDULA);
       

        // Obtener los teléfonos y direcciones del agente
        const telefonosRes = await axios.get(URI4 + ID_PROVEEDOR);
        const direccionesRes = await axios.get(URI3 + ID_PROVEEDOR);

        // Establecer los estados de los teléfonos y direcciones
        setTelefono_1(telefonosRes.data.TELEFONO_1);
        setTelefono_2(telefonosRes.data.TELEFONO_2);
        setTelefono_3(telefonosRes.data.TELEFONO_3);
        setProvincia(direccionesRes.data.PROVINCIA);
        setCanton(direccionesRes.data.CANTON);
        setDistrito(direccionesRes.data.DISTRITO);
        setBarrio(direccionesRes.data.BARRIO);
        setOtras_sennas(direccionesRes.data.OTRAS_SENNAS);
    };

    return (
        <div>
            <Navbar />
            <h3>Edit POST</h3>
            <form onSubmit={update}>
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
                    <label className="form-label">CORREO </label>
                    <input
                        value={CORREO}
                        onChange={(e) => setCorreo(e.target.value)}
                        type="text"
                        className='form-control'
                        required />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Tipo de cedula</label>
                    <textarea
                        value={TIPO_CEDULA}
                        onChange={(e) => setTipo_cedula(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>

                <div className="col-md-4">
                    <label className="form-label">CEDULA</label>
                    <input
                        value={CEDULA}
                        onChange={(e) => setCedula(e.target.value)}
                        type="text"
                        className='form-control'
                        required />
                </div>

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




                <button type="submit" className="btn btn-primary">Actualizar</button>
            </form>
        </div>
    )


}

export default EditarProveedor