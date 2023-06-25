import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const URI = 'http://localhost:8000/Clientes/';
const URI2 = 'http://localhost:8000/TipoCedula/';
const URI3 = 'http://localhost:8000/DireccionesCliente/';
const URI4 = 'http://localhost:8000/TelefonosCliente/';
const URI5 = 'http://localhost:8000/TiposCliente/';


const CrearCliente = () => {
    const [TiposCedulas, setCedula] = useState([]);
    useEffect(() => {
        getTiposCedulas();
    }, []);

    // Procedure to fetch all Zonas
    const getTiposCedulas = async () => {
        const res = await axios.get(URI2);
        setCedula(res.data);
    };

    const [TiposClientes, setCliente] = useState([]);
    useEffect(() => {
        getTiposClientes();
    }, []);

    // Procedure to fetch all Zonas
    const getTiposClientes = async () => {
        const res = await axios.get(URI5);
        setCliente(res.data);
    };

    const navigate = useNavigate();

    // Procedure to store data
    const store = async (values) => {
        const {
            NOMBRE,
            APELLIDO_PATERNO,
            APELLIDO_MATERNO,
            ID_TIPO_CLIENTE,
            CORREO,
            TIPO_CEDULA,
            CEDULA,
            PROVINCIA,
            CANTON,
            DISTRITO,
            BARRIO,
            OTRAS_SENNAS,
            TELEFONO_1,
            TELEFONO_2,
            TELEFONO_3,
        } = values;

        const clienteResponse = await axios.post(URI, {
            NOMBRE,
            APELLIDO_PATERNO,
            APELLIDO_MATERNO,
            ID_TIPO_CLIENTE,
            CORREO,
            TIPO_CEDULA,
            CEDULA,
        });

        const ID_CLIENTE = clienteResponse.data.ID_CLIENTE;

        await axios.post(URI3, {
            PROVINCIA,
            CANTON,
            DISTRITO,
            BARRIO,
            OTRAS_SENNAS,
            ID_CLIENTE,
        });

        await axios.post(URI4, {
            TELEFONO_1,
            TELEFONO_2,
            TELEFONO_3,
            ID_CLIENTE,
        });

        navigate('/Clientes');
    };

    return (
        <Formik
            initialValues={{
                NOMBRE: '',
                APELLIDO_PATERNO: '',
                APELLIDO_MATERNO: '',
                ID_TIPO_CLIENTE: '',
                CORREO: '',
                TIPO_CEDULA: '',
                CEDULA:'',
                PROVINCIA: '',
                CANTON: '',
                DISTRITO: '',
                BARRIO: '',
                OTRAS_SENNAS: '',
                TELEFONO_1: '',
                TELEFONO_2: '',
                TELEFONO_3: '',
            }}
            validationSchema={validationSchema}
            onSubmit={store}
        >
            <Form>
                <div className="col-md-4">
                    <label className="form-label">Nombre</label>
                    <Field
                        type="text"
                        className="form-control"
                        name="NOMBRE"
                        required
                    />
                    <ErrorMessage
                        name="NOMBRE"
                        component="div"
                        className="text-danger"
                    />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Apellido Paterno</label>
                    <Field
                        type="text"
                        className="form-control"
                        name="APELLIDO_PATERNO"
                        required
                    />
                    <ErrorMessage
                        name="APELLIDO_PATERNO"
                        component="div"
                        className="text-danger"
                    />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Apellido Materno</label>
                    <Field
                        type="text"
                        className="form-control"
                        name="APELLIDO_MATERNO"
                        required
                    />
                    <ErrorMessage
                        name="APELLIDO_MATERNO"
                        component="div"
                        className="text-danger"
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
                    <label className="form-label">Correo</label>
                    <Field
                        type="text"
                        className="form-control"
                        name="CORREO"
                        required
                    />
                    <ErrorMessage
                        name="CORREO"
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
                <div className="col-md-2">
                    <label className="form-label">Cédula</label>
                    <Field
                        type="text"
                        className="form-control"
                        name="CEDULA"
                        required
                    />
                    <ErrorMessage
                        name="CEDULA"
                        component="div"
                        className="text-danger"
                    />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Provincia</label>
                    <Field
                        type="text"
                        className="form-control"
                        name="PROVINCIA"
                        required
                    />
                    <ErrorMessage
                        name="PROVINCIA"
                        component="div"
                        className="text-danger"
                    />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Cantón</label>
                    <Field
                        type="text"
                        className="form-control"
                        name="CANTON"
                        required
                    />
                    <ErrorMessage
                        name="CANTON"
                        component="div"
                        className="text-danger"
                    />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Distrito</label>
                    <Field
                        type="text"
                        className="form-control"
                        name="DISTRITO"
                        required
                    />
                    <ErrorMessage
                        name="DISTRITO"
                        component="div"
                        className="text-danger"
                    />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Barrio</label>
                    <Field type="text" className="form-control" name="BARRIO" required />
                    <ErrorMessage
                        name="BARRIO"
                        component="div"
                        className="text-danger"
                    />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Otras Señas</label>
                    <Field
                        type="text"
                        className="form-control"
                        name="OTRAS_SENNAS"
                        required
                    />
                    <ErrorMessage
                        name="OTRAS_SENNAS"
                        component="div"
                        className="text-danger"
                    />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Teléfono 1</label>
                    <Field
                        type="text"
                        className="form-control"
                        name="TELEFONO_1"
                        required
                    />
                    <ErrorMessage
                        name="TELEFONO_1"
                        component="div"
                        className="text-danger"
                    />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Teléfono 2</label>
                    <Field
                        type="text"
                        className="form-control"
                        name="TELEFONO_2"
                        required
                    />
                    <ErrorMessage
                        name="TELEFONO_2"
                        component="div"
                        className="text-danger"
                    />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Teléfono 3</label>
                    <Field
                        type="text"
                        className="form-control"
                        name="TELEFONO_3"
                        required
                    />
                    <ErrorMessage
                        name="TELEFONO_3"
                        component="div"
                        className="text-danger"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Guardar
                </button>
            </Form>
        </Formik>
    );
};

export default CrearCliente;