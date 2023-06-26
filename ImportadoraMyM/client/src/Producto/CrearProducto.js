import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const URI='http://localhost:8000/Productos/';
const URI2='http://localhost:8000/Companias/';
const URI3='http://localhost:8000/Proveedores/';

const CrearProducto = () => {
    const [Companias, setCompania] = useState([]);
    useEffect(() => {
        getCompanias();
    }, []);

    // Procedure to fetch all Zonas
    const getCompanias = async () => {
        const res = await axios.get(URI2);
        setCompania(res.data);
    };

    const [Proveedores, setProveedor] = useState([]);
    useEffect(() => {
        getProveedores();
    }, []);

    // Procedure to fetch all Zonas
    const getProveedores = async () => {
        const res = await axios.get(URI3);
        setProveedor(res.data);
    };

    const navigate = useNavigate();

    // Procedure to store data
    const store = async (values) => {
        const {
            NOMBRE,
            DESCRIPCION,
            PROVEEDOR,
            PRECIO,
            DESCUENTO,
            PORCENTAJE_GANANCIA_1,
            PORCENTAJE_GANANCIA_2,
            PORCENTAJE_GANANCIA_3,
            EXISTENCIA_ACTUAL,
            CABYS,
            COMPANIA,
            FECHA_INGRESO,
        } = values;

        const productoResponse = await axios.post(URI, {
            NOMBRE,
            DESCRIPCION,
            PROVEEDOR,
            PRECIO,
            DESCUENTO,
            PORCENTAJE_GANANCIA_1,
            PORCENTAJE_GANANCIA_2,
            PORCENTAJE_GANANCIA_3,
            EXISTENCIA_ACTUAL,
            CABYS,
            COMPANIA,
            FECHA_INGRESO,
        });

        navigate('/Productos');
    };

    return (
        <Formik
            initialValues={{
                NOMBRE:'',
                DESCRIPCION:'',
                PROVEEDOR:'',
                PRECIO:'',
                DESCUENTO:'',
                PORCENTAJE_GANANCIA_1:'',
                PORCENTAJE_GANANCIA_2:'',
                PORCENTAJE_GANANCIA_3:'',
                EXISTENCIA_ACTUAL:'',
                CABYS:'',
                COMPANIA:'',
                FECHA_INGRESO:'',
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
                    <label className="form-label">Descripción</label>
                    <Field
                        type="text"
                        className="form-control"
                        name="DESCRIPCION"
                        required
                    />
                    <ErrorMessage
                        name="DESCRIPCION"
                        component="div"
                        className="text-danger"
                    />
                </div>
                <div className="col-md-2">
                    <label className="form-label">Proveedor</label>
                    <Field as="select" className="form-control" name="PROVEEDOR" required>
                        <option value="">Seleccionar Proveedor</option>
                        {Proveedores.map((option) => (
                            <option key={option.ID_PROVEEDOR} value={option.ID_PROVEEDOR}>
                                {option.NOMBRE}
                            </option>
                        ))}
                    </Field>
                    <ErrorMessage
                        name="PROVEEDOR"
                        component="div"
                        className="text-danger"
                    />
                </div>
                <div className="col-md-2">
                    <label className="form-label">Precio</label>
                    <Field
                        type="number"
                        className="form-control"
                        name="PRECIO"
                        required
                    />
                    <ErrorMessage
                        name="PRECIO"
                        component="div"
                        className="text-danger"
                    />
                </div>
                <div className="col-md-2">
                    <label className="form-label">Descuento</label>
                    <Field
                        type="number"
                        className="form-control"
                        name="DESCUENTO"
                        required
                    />
                    <ErrorMessage
                        name="DESCUENTO"
                        component="div"
                        className="text-danger"
                    />
                </div>
                <div className="col-md-2">
                    <label className="form-label">Primer Porcentaje de Ganancia</label>
                    <Field
                        type="number"
                        className="form-control"
                        name="PORCENTAJE_GANANCIA_1"
                        required
                    />
                    <ErrorMessage
                        name="PORCENTAJE_GANANCIA_1"
                        component="div"
                        className="text-danger"
                    />
                </div>
                <div className="col-md-2">
                    <label className="form-label">Segundo Porcentaje de Ganancia</label>
                    <Field
                        type="number"
                        className="form-control"
                        name="PORCENTAJE_GANANCIA_2"
                        required
                    />
                    <ErrorMessage
                        name="PORCENTAJE_GANANCIA_2"
                        component="div"
                        className="text-danger"
                    />
                </div>
                <div className="col-md-2">
                    <label className="form-label">Tercer Porcentaje de Ganancia</label>
                    <Field
                        type="number"
                        className="form-control"
                        name="PORCENTAJE_GANANCIA_3"
                        required
                    />
                    <ErrorMessage
                        name="PORCENTAJE_GANANCIA_3"
                        component="div"
                        className="text-danger"
                    />
                </div>
                <div className="col-md-2">
                    <label className="form-label">Existencias Actuales</label>
                    <Field
                        type="number"
                        className="form-control"
                        name="EXISTENCIA_ACTUAL"
                        required
                    />
                    <ErrorMessage
                        name="EXISTENCIA_ACTUAL"
                        component="div"
                        className="text-danger"
                    />
                </div>
                <div className="col-md-2">
                    <label className="form-label">CABYS</label>
                    <Field
                        type="text"
                        className="form-control"
                        name="CABYS"
                        required
                    />
                    <ErrorMessage
                        name="PORCENTAJE_GANANCIA_1"
                        component="div"
                        className="text-danger"
                    />
                </div>
                <div className="col-md-2">
                    <label className="form-label">Compañía</label>
                    <Field as="select" className="form-control" name="COMPANIA" required>
                        <option value="">Seleccionar Compañía</option>
                        {Companias.map((option) => (
                            <option key={option.ID_COMPANIA} value={option.ID_COMPANIA}>
                                {option.NOMBRE}
                            </option>
                        ))}
                    </Field>
                    <ErrorMessage
                        name="COMPANIA"
                        component="div"
                        className="text-danger"
                    />
                </div>
                <div className="col-md-2">
                    <label className="form-label">Fecha de Ingreso</label>
                    <Field
                        type="date"
                        className="form-control"
                        name="FECHA_INGRESO"
                        required
                    />
                    <ErrorMessage
                        name="FECHA_INGRESO"
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

export default CrearProducto;