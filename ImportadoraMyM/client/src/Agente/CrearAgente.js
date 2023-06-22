import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const URI = 'http://localhost:8000/Agentes/';
const URI2 = 'http://localhost:8000/Zonas/';
const URI3 = 'http://localhost:8000/DireccionesAgente/';
const URI4 = 'http://localhost:8000/TelefonosAgente/';

const URI = 'http://localhost:8000/Agentes/'
const URI2 = 'http://localhost:8000/Zonas/'
const URI3 = 'http://localhost:8000/Direcciones/'
const URI4 = 'http://localhost:8000/Telefonos/'


const CrearAgente = () => {
    const [Zonas, setZona] = useState([]);
    useEffect(() => {
        getZonas();
    }, []);

    // Procedure to fetch all Zonas
    const getZonas = async () => {
        const res = await axios.get(URI2);
        setZona(res.data);
    };

    const navigate = useNavigate();

    // Procedure to store data
    const store = async (values) => {
        const {
            NOMBRE,
            APELLIDO_PATERNO,
            APELLIDO_MATERNO,
            COMISION_POR_VENTA,
            ID_ZONA,
            IDENTIFICACION,
            PROVINCIA,
            CANTON,
            DISTRITO,
            BARRIO,
            OTRAS_SENNAS,
            TELEFONO_1,
            TELEFONO_2,
            TELEFONO_3,
        } = values;

        const agenteDeVentasResponse = await axios.post(URI, {
            NOMBRE,
            APELLIDO_PATERNO,
            APELLIDO_MATERNO,
            COMISION_POR_VENTA,
            ID_ZONA,
            IDENTIFICACION,
        });

        const ID_AGENTE = agenteDeVentasResponse.data.ID_AGENTE;

        await axios.post(URI3, {
            PROVINCIA,
            CANTON,
            DISTRITO,
            BARRIO,
            OTRAS_SENNAS,
            ID_AGENTE,
        });

        await axios.post(URI4, {
            TELEFONO_1,
            TELEFONO_2,
            TELEFONO_3,
            ID_AGENTE
        })

        navigate('/');
    };

    return (
        <Formik
            initialValues={{
                NOMBRE: '',
                APELLIDO_PATERNO: '',
                APELLIDO_MATERNO: '',
                COMISION_POR_VENTA: '',
                ID_ZONA: '',
                IDENTIFICACION: '',
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
                <div className="col-md-4">
                    <label className="form-label">Comisión</label>
                    <Field
                        type="text"
                        className="form-control"
                        name="COMISION_POR_VENTA"
                        required
                    />
                    <ErrorMessage
                        name="COMISION_POR_VENTA"
                        component="div"
                        className="text-danger"
                    />
                </div>
                <div className="col-md-2">
                    <label className="form-label">Cedula</label>
                    <Field
                        type="text"
                        className="form-control"
                        name="IDENTIFICACION"
                        required
                    />
                    <ErrorMessage
                        name="IDENTIFICACION"
                        component="div"
                        className="text-danger"
                    />
                </div>
                <div className="col-md-2">
                    <label className="form-label">Zona</label>
                    <Field as="select" className="form-control" name="ID_ZONA" required>
                        <option value="">Seleccionar Zona</option>
                        {Zonas.map((option) => (
                            <option key={option.ID_ZONA} value={option.ID_ZONA}>
                                {option.NOMBRE}
                            </option>
                        ))}
                    </Field>
                    <ErrorMessage
                        name="ID_ZONA"
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

export default CrearAgente;