import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/Clientes/';
const URI2 = 'http://localhost:8000/TipoCedula/';
const URI3 = 'http://localhost:8000/DireccionesCliente/';
const URI4 = 'http://localhost:8000/TelefonosCliente/';
const URI5 = 'http://localhost:8000/TiposCliente/';


const EditarCliente = () => {
    const [TiposCedulas, setTipo_cedula] = useState([]);
    useEffect(() => {
        getTiposCedulas();
    }, []);

    // Procedure to fetch all Zonas
    const getTiposCedulas = async () => {
        const res = await axios.get(URI2);
        setTipo_cedula(res.data);
    };

    const [TiposClientes, setTipo_Cliente] = useState([]);
    useEffect(() => {
        getTiposClientes();
    }, []);

    // Procedure to fetch all Zonas
    const getTiposClientes = async () => {
        const res = await axios.get(URI5);
        setTipo_Cliente(res.data);
    };

    const [NOMBRE, setNombre] = useState('')
    const [APELLIDO_PATERNO, setApellido_paterno] = useState('')
    const [APELLIDO_MATERNO, setApellido_materno] = useState('')
    const [CORREO, setCorreo] = useState('')
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
    const { ID_CLIENTE } = useParams()


    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault();

        // Actualizar el agente
        await axios.put(URI + ID_CLIENTE, {
            NOMBRE: NOMBRE,
            APELLIDO_PATERNO: APELLIDO_PATERNO,
            APELLIDO_MATERNO: APELLIDO_MATERNO,
            TiposClientes: TiposClientes,
            CORREO: CORREO,
            TiposCedulas: TiposCedulas,
            CEDULA: CEDULA,
        });

        // Actualizar los teléfonos
        await axios.put(URI4 + ID_CLIENTE, {
            TELEFONO_1: TELEFONO_1,
            TELEFONO_2: TELEFONO_2,
            TELEFONO_3: TELEFONO_3
        });

        // Actualizar las direcciones
        await axios.put(URI3 + ID_CLIENTE, {
            PROVINCIA: PROVINCIA,
            CANTON: CANTON,
            DISTRITO: DISTRITO,
            BARRIO: BARRIO,
            OTRAS_SENNAS: OTRAS_SENNAS
        });

        navigate('/Clientes');
    };



    useEffect(() => {
        getClienteById()
    }, [])

    const getClienteById = async () => {
        const res = await axios.get(URI + ID_CLIENTE);
        setNombre(res.data.NOMBRE);
        setApellido_paterno(res.data.APELLIDO_PATERNO);
        setApellido_materno(res.data.APELLIDO_MATERNO);
        setId_tipo_cliente(res.data.ID_TIPO_CLIENTE);
        setCorreo(res.data.CORREO);
        setTipo_cedula(res.data.TIPO_CEDULA);
        setCedula(res.data.CEDULA);

        // Obtener los teléfonos y direcciones del agente
        const telefonosRes = await axios.get(URI4 + ID_CLIENTE);
        const direccionesRes = await axios.get(URI3 + ID_CLIENTE);

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
            <h3>Edit POST</h3>
            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                        value={NOMBRE}
                        onChange={(e) => setNombre(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Primer Apellido</label>
                    <textarea
                        value={APELLIDO_PATERNO}
                        onChange={(e) => setApellido_paterno(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Segundo Apellido</label>
                    <textarea
                        value={APELLIDO_MATERNO}
                        onChange={(e) => setApellido_materno(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>

                <div className="col-md-2">
                    <label className="form-label">Tipo de Cliente</label>
                    <Field as="select" className="form-control" name="ID_TIPO_CLIENTE" required>
                        <option value="">Seleccionar Tipo de Cliente</option>
                        {TiposClientes.map((option) => (
                            <option key={option.ID_TIPO_CLIENTE} value={option.ID_TIPO_CLIENTE}>
                                {option.NOMBRE}
                            </option>
                        ))}
                    </Field>
                    <ErrorMessage
                        name="ID_TIPO_CLIENTE"
                        component="div"
                        className="text-danger"
                    />
                </div>

                <div className="col-md-2">
                    <label className="form-label">Tipo de Cédula</label>
                    <Field as="select" className="form-control" name="TIPO_CEDULA" required>
                        <option value="">Seleccionar Tipo de Cédula</option>
                        {TiposCedulas.map((option) => (
                            <option key={option.ID_TIPO_CEDULA} value={option.ID_TIPO_CEDULA}>
                                {option.DESCRIPCION}
                            </option>
                        ))}
                    </Field>
                    <ErrorMessage
                        name="TIPO_CEDULA"
                        component="div"
                        className="text-danger"
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Cédula</label>
                    <textarea
                        value={CEDULA}
                        onChange={(e) => setCedula(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Teléfono 1</label>
                    <input
                        value={TELEFONO_1}
                        onChange={(e) => setTelefono_1(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Teléfono 2</label>
                    <input
                        value={TELEFONO_2}
                        onChange={(e) => setTelefono_2(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Teléfono 3</label>
                    <input
                        value={TELEFONO_3}
                        onChange={(e) => setTelefono_3(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Provincia</label>
                    <input
                        value={PROVINCIA}
                        onChange={(e) => setProvincia(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Cantón</label>
                    <input
                        value={CANTON}
                        onChange={(e) => setCanton(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Distrito</label>
                    <input
                        value={DISTRITO}
                        onChange={(e) => setDistrito(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Barrio</label>
                    <input
                        value={BARRIO}
                        onChange={(e) => setBarrio(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Otras señas</label>
                    <input
                        value={OTRAS_SENNAS}
                        onChange={(e) => setOtras_sennas(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>


                <button type="submit" className="btn btn-primary">Actualizar</button>
            </form>
        </div>
    )


}

export default EditarCliente