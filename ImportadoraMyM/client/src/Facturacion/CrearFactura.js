import React, { useState } from "react";
import { Formik, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import axios from "axios";



const URI = 'http://localhost:8000/Facturacion/';

const CrearFactura = () => {
    const validationSchema = Yup.object().shape({
        ID_COMPANIA: Yup.string().required("Campo requerido"),
        ID_TIPO_FACTURA: Yup.string().required("Campo requerido"),
        ID_CLIENTE: Yup.string().required("Campo requerido"),
        FECHA: Yup.date().required("Campo requerido"),
        VENCIMIENTO: Yup.date().required("Campo requerido"),
        detallesFactura: Yup.array().of(
            Yup.object().shape({
                ID_PRODUCTO: Yup.string().required("Campo requerido"),
                CANTIDAD: Yup.number().required("Campo requerido"),
                ID_AGENTE: Yup.number().required("Campo requerido"),
                SUBTOTAL: Yup.number().required("Campo requerido"),
                DESCUENTO: Yup.number().required("Campo requerido"),
            })
        ),
    });

    const calcularTotal = (detallesFactura) => {
        let total = 0;
        detallesFactura.forEach((detalle) => {
            total += detalle.SUBTOTAL;
        });
        return total;
    };

    return (
        <Formik
            initialValues={{
                ID_COMPANIA: "",
                ID_TIPO_FACTURA: "",
                ID_CLIENTE: "",
                FECHA: "",
                VENCIMIENTO: "",
                detallesFactura: [{ ID_PRODUCTO: "", CANTIDAD: "", ID_AGENTE:"",SUBTOTAL: "", DESCUENTO :""}],
            }}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
                const total = calcularTotal(values.detallesFactura);
                values.TOTAL = total;
                try {
                    await axios.post(URI, values); // Envia los datos al endpoint /api/facturas en el backend
                    console.log("Factura creada exitosamente");
                    // Aquí puedes redirigir a una página de éxito o mostrar un mensaje de éxito
                } catch (error) {
                    console.error("Error al crear la factura", error);
                    // Aquí puedes mostrar un mensaje de error o realizar alguna otra acción en caso de error
                }
            }}
        >
            {({ values }) => (
                <form>
                    <div className="form-group">
                        <label htmlFor="ID_COMPANIA">Compañía</label>
                        <Field
                            type="text"
                            id="ID_COMPANIA"
                            name="ID_COMPANIA"
                            className="form-control"
                        />
                        <ErrorMessage
                            name="ID_COMPANIA"
                            component="div"
                            className="text-danger"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="ID_TIPO_FACTURA">ID_TIPO_FACTURA</label>
                        <Field
                            type="text"
                            id="ID_TIPO_FACTURA"
                            name="ID_TIPO_FACTURA"
                            className="form-control"
                        />
                        <ErrorMessage
                            name="ID_TIPO_FACTURA"
                            component="div"
                            className="text-danger"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="ID_CLIENTE">ID_CLIENTE</label>
                        <Field
                            type="text"
                            id="ID_CLIENTE"
                            name="ID_CLIENTE"
                            className="form-control"
                        />
                        <ErrorMessage
                            name="ID_CLIENTE"
                            component="div"
                            className="text-danger"
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="FECHA">FECHA</label>
                        <Field
                            type="text"
                            id="FECHA"
                            name="FECHA"
                            className="form-control"
                        />
                        <ErrorMessage
                            name="FECHA"
                            component="div"
                            className="text-danger"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="FECHA">VENCIMIENTO</label>
                        <Field
                            type="text"
                            id="VENCIMIENTO"
                            name="VENCIMIENTO"
                            className="form-control"
                        />
                        <ErrorMessage
                            name="VENCIMIENTO"
                            component="div"
                            className="text-danger"
                        />
                    </div>

                    <div className="col-md-12 mt-4">
                        <h5>Detalles de Factura</h5>
                        <FieldArray name="detallesFactura">
                            {(arrayHelpers) => (
                                <div>
                                    {values.detallesFactura.map((detalle, index) => (
                                        <div key={index} className="row mb-2">
                                            <div className="col-md-4">
                                                <label htmlFor={`detallesFactura.${index}.ID_PRODUCTO`}>
                                                    Producto
                                                </label>
                                                <Field
                                                    type="text"
                                                    id={`detallesFactura.${index}.ID_PRODUCTO`}
                                                    name={`detallesFactura.${index}.ID_PRODUCTO`}
                                                    className="form-control"
                                                />
                                                <ErrorMessage
                                                    name={`detallesFactura.${index}.ID_PRODUCTO`}
                                                    component="div"
                                                    className="text-danger"
                                                />
                                            </div>

                                            <div className="col-md-4">
                                                <label htmlFor={`detallesFactura.${index}.CANTIDAD`}>
                                                    Cantidad
                                                </label>
                                                <Field
                                                    type="number"
                                                    id={`detallesFactura.${index}.CANTIDAD`}
                                                    name={`detallesFactura.${index}.CANTIDAD`}
                                                    className="form-control"
                                                />
                                                <ErrorMessage
                                                    name={`detallesFactura.${index}.CANTIDAD`}
                                                    component="div"
                                                    className="text-danger"
                                                />
                                            </div>



                                            <div className="col-md-4">
                                                <label htmlFor={`detallesFactura.${index}.ID_AGENTE`}>
                                                    ID_AGENTE
                                                </label>
                                                <Field
                                                    type="number"
                                                    id={`detallesFactura.${index}.ID_AGENTE`}
                                                    name={`detallesFactura.${index}.ID_AGENTE`}
                                                    className="form-control"
                                                />
                                                <ErrorMessage
                                                    name={`detallesFactura.${index}.ID_AGENTE`}
                                                    component="div"
                                                    className="text-danger"
                                                />
                                            </div>


                                            <div className="col-md-4">
                                                <label htmlFor={`detallesFactura.${index}.SUBTOTAL`}>
                                                    Subtotal
                                                </label>
                                                <Field
                                                    type="number"
                                                    id={`detallesFactura.${index}.SUBTOTAL`}
                                                    name={`detallesFactura.${index}.SUBTOTAL`}
                                                    className="form-control"
                                                />
                                                <ErrorMessage
                                                    name={`detallesFactura.${index}.SUBTOTAL`}
                                                    component="div"
                                                    className="text-danger"
                                                />
                                            </div>

                                            <div className="col-md-4">
                                                <label htmlFor={`detallesFactura.${index}.DESCUENTO`}>
                                                    DESCUESTO
                                                </label>
                                                <Field
                                                    type="number"
                                                    id={`detallesFactura.${index}.DESCUENTO`}
                                                    name={`detallesFactura.${index}.DESCUENTO`}
                                                    className="form-control"
                                                />
                                                <ErrorMessage
                                                    name={`detallesFactura.${index}.DESCUENTO`}
                                                    component="div"
                                                    className="text-danger"
                                                />
                                            </div>

                                        </div>
                                    ))}

                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() =>
                                            arrayHelpers.push({
                                                ID_PRODUCTO: "",
                                                CANTIDAD: "",
                                                ID_AGENTE:"",
                                                SUBTOTAL: "",
                                                DESCUENTO:"",

                                            })
                                        }
                                    >
                                        Agregar Detalle
                                    </button>
                                </div>
                            )}
                        </FieldArray>
                    </div>

                    <div className="col-md-12 mt-4">
                        <button type="submit" className="btn btn-primary">
                            Guardar
                        </button>
                    </div>
                </form>
            )}
        </Formik>
    );
};

export default CrearFactura;