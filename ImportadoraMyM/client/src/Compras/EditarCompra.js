import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const EditarCompra = () => {
    const { NUM_DOCUMENTO } = useParams();
    const [compra, setCompra] = useState({});
    const [detalleCompra, setDetalleCompra] = useState([]);

    const obtenerCompra = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/Compras/${NUM_DOCUMENTO}`);
            const compraData = response.data;

            setCompra(compraData);

            if (compraData.DetalleCompra) {
                setDetalleCompra(compraData.DetalleCompra);
            } else {
                setDetalleCompra([]);
            }
        } catch (error) {
            console.error('Error al obtener la compra:', error);
        }
    };

    const obtenerDetalleCompra = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/Compras/${NUM_DOCUMENTO}/detalle`);
            const detalleCompraData = response.data;

            setDetalleCompra(detalleCompraData);
        } catch (error) {
            console.error('Error al obtener los detalles de la compra:', error);
        }
    };



    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCompra((prevCompra) => ({
            ...prevCompra,
            [name]: value,
        }));
    };

    const handleDetalleChange = (event, index) => {
        const { name, value } = event.target;

        setDetalleCompra((prevDetalleCompra) => {
            const updatedDetalleCompra = [...prevDetalleCompra];
            updatedDetalleCompra[index] = {
                ...updatedDetalleCompra[index],
                [name]: value,
            };
            return updatedDetalleCompra;
        });
    };

    useEffect(() => {
        obtenerCompra();
        obtenerDetalleCompra();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Actualizar la compra
            await axios.put(`http://localhost:8000/Compras/${NUM_DOCUMENTO}`, compra);

            // Verificar que haya al menos un detalle agregado antes de enviarlo al backend
            if (detalleCompra.length === 0) {
                // Mostrar mensaje de error en una alerta
                alert('Debe agregar al menos un detalle de compra antes de guardar');
                return;
            }

            // Crear un arreglo de detalles de compra para enviar al servidor
            const detallesCompraArray = detalleCompra.map((detalle) => ({
                ID_DETALLE: detalle.ID_DETALLE,
                ID_PRODUCTO: detalle.ID_PRODUCTO,
                CANTIDAD: detalle.CANTIDAD,
                SUBTOTAL: detalle.SUBTOTAL,
                DESCUENTO: detalle.DESCUENTO,
            }));

            // Actualizar el detalle de la compra
            await axios.put(
                `http://localhost:8000/Compras/${NUM_DOCUMENTO}/detalle`,
                detallesCompraArray
            );

            console.log('Compra actualizada exitosamente');
        } catch (error) {
            console.error('Error al actualizar la compra:', error);
        }
    };

    const eliminarDetalle = (index) => {
        setDetalleCompra((prevDetalleCompra) => {
            const updatedDetalleCompra = [...prevDetalleCompra];
            updatedDetalleCompra.splice(index, 1);
            return updatedDetalleCompra;
        });
    };

    

    return (
        <div>
            <h2>Editar Compra</h2>
            <form onSubmit={handleSubmit}>
                <label>Compañía:</label>
                <input
                    type="text"
                    name="ID_COMPANIA"
                    value={compra.ID_COMPANIA || ''}
                    onChange={handleInputChange}
                />
                <label>Proveedor:</label>
                <input
                    type="text"
                    name="ID_PROVEEDOR"
                    value={compra.ID_PROVEEDOR || ''}
                    onChange={handleInputChange}
                />
                <label>Bodega:</label>
                <input
                    type="text"
                    name="ID_BODEGA"
                    value={compra.ID_BODEGA || ''}
                    onChange={handleInputChange}
                />
                <label>Fecha:</label>
                <input
                    type="date"
                    name="FECHA"
                    value={compra.FECHA || ''}
                    onChange={handleInputChange}
                />
                <label>Total:</label>
                <input
                    type="text"
                    name="TOTAL"
                    value={compra.TOTAL || ''}
                    onChange={handleInputChange}
                />
                <hr />
                <h3>Detalle de la Compra</h3>
                {detalleCompra.map((detalle, index) => (
                    <div key={index}>
                        <label>ID Producto:</label>
                        <input
                            type="text"
                            name={`ID_PRODUCTO`}
                            value={detalle.ID_PRODUCTO || ''}
                            onChange={(event) => handleDetalleChange(event, index)}
                        />
                        <label>Cantidad:</label>
                        <input
                            type="number"
                            name={`detalleCompra[${index}].CANTIDAD`}
                            value={detalle.CANTIDAD || ''}
                            onChange={(event) => handleDetalleChange(event, index)}
                        />
                        <label>Subtotal:</label>
                        <input
                            type="number"
                            name={`detalleCompra[${index}].SUBTOTAL`}
                            value={detalle.SUBTOTAL || ''}
                            onChange={(event) => handleDetalleChange(event, index)}
                        />
                        <label>Descuento:</label>
                        <input
                            type="number"
                            name={`detalleCompra[${index}].DESCUENTO`}
                            value={detalle.DESCUENTO || ''}
                            onChange={(event) => handleDetalleChange(event, index)}
                        />
                        <button type="button" onClick={() => eliminarDetalle(index)}>Eliminar Detalle</button>
                    </div>
                ))}
                <button type="submit">Guardar cambios</button>
            </form>
            <Link to="/Compras">Volver a la lista de compras</Link>
        </div>
    );
};

export default EditarCompra;