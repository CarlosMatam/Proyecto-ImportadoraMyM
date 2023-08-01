import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CrearFactura = () => {
    const [companias, setCompanias] = useState([]);
    const [tiposFactura, setTiposFactura] = useState([]);
    const [clientes, setClientes] = useState([]);
    const [detalleVenta, setDetalleVenta] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [iva, setIVA] = useState(0);
    const [total, setTotal] = useState(0);
    const [factura, setFactura] = useState({
        ID_COMPANIA: '',
        ID_TIPO_FACTURA: '',
        ID_CLIENTE: '',
        FECHA: new Date().toISOString().slice(0, 10), // Establecer fecha actual
        VENCIMIENTO: '',
    });
    const [producto, setProducto] = useState({
        codigo: '',
        descripcion: '',
        cantidad: '',
        precio: '',
        descuento: '',
        precioTotal: 0,
    });
    const [codigoProducto, setCodigoProducto] = useState('');

    useEffect(() => {
        obtenerCompanias();
        obtenerTiposFactura();
        obtenerClientes();
        obtenerUltimoIDFactura();
    }, []);

    const obtenerCompanias = async () => {
        try {
            const response = await axios.get('http://localhost:8000/Companias');
            const data = response.data;
            setCompanias(data);
        } catch (error) {
            console.error('Error al obtener las compañías:', error);
        }
    };

    const obtenerTiposFactura = async () => {
        try {
            const response = await axios.get('http://localhost:8000/TiposFactura');
            const data = response.data;
            setTiposFactura(data);
        } catch (error) {
            console.error('Error al obtener los tipos de factura:', error);
        }
    };

    const obtenerClientes = async () => {
        try {
            const response = await axios.get('http://localhost:8000/Clientes');
            const data = response.data;
            setClientes(data);
        } catch (error) {
            console.error('Error al obtener los clientes:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProducto((prevProducto) => ({
            ...prevProducto,
            [name]: value,
        }));
    };

    const handleFacturaChange = (event) => {
        const { name, value } = event.target;
        setFactura((prevFactura) => ({
            ...prevFactura,
            [name]: value,
        }));
    };

    const handleAgregarProducto = () => {
        if (producto.cantidad > 0 && producto.precio > 0) {
            const precioSinDescuento = producto.cantidad * producto.precio;
            const descuento = precioSinDescuento * (producto.descuento / 100);
            const precioConDescuento = precioSinDescuento - descuento;

            const nuevoProducto = {
                ...producto,
                precioTotal: precioConDescuento,
            };

            setDetalleVenta((prevDetalleVenta) => [...prevDetalleVenta, nuevoProducto]);
            limpiarProducto();
        }
    };

    const limpiarProducto = () => {
        setProducto({
            codigo: '',
            descripcion: '',
            cantidad: '',
            precio: '',
            descuento: '',
            precioTotal: 0,
        });
        setCodigoProducto('');
    };

    const limpiarFactura = () => {
        setFactura({
            ID_COMPANIA: '',
            ID_TIPO_FACTURA: '',
            ID_CLIENTE: '',
            VENCIMIENTO: '',
        });
    };

    const handleCodigoChange = async (event) => {
        const { value } = event.target;
        setCodigoProducto(value);

        if (value !== '') {
            try {
                const response = await axios.get(`http://localhost:8000/Productos/buscar/${value}`);
                const productoData = response.data;

                if (productoData) {
                    setProducto((prevProducto) => ({
                        ...prevProducto,
                        codigo: productoData.ID_PRODUCTO,
                        descripcion: productoData.DESCRIPCION,
                        cantidad: '',
                        precio: productoData.PRECIO,
                        descuento: productoData.DESCUENTO,
                        precioTotal: 0,
                    }));
                } else {
                    setProducto((prevProducto) => ({
                        ...prevProducto,
                        descripcion: '',
                        cantidad: '',
                        precio: '',
                        descuento: '',
                        precioTotal: 0,
                    }));
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            setProducto((prevProducto) => ({
                ...prevProducto,
                codigo: '',
                descripcion: '',
                cantidad: '',
                precio: '',
                descuento: '',
                precioTotal: 0,
            }));
        }
    };

    useEffect(() => {
        const calcularSubtotal = () => {
            const subtotal = detalleVenta.reduce(
                (total, producto) => total + producto.precioTotal,
                0
            );
            setSubtotal(subtotal);
        };

        const calcularIVA = () => {
            const iva = subtotal * 0.13;
            setIVA(iva);
        };

        const calcularTotal = () => {
            const total = subtotal + iva;
            setTotal(total);
        };

        calcularSubtotal();
        calcularIVA();
        calcularTotal();
    }, [detalleVenta, subtotal, iva]);

    const crearFactura = async () => {
        if (detalleVenta.length > 0) {
            try {
                // Crear la factura y los detalles en la API
                const facturaData = {
                    ID_COMPANIA: factura.ID_COMPANIA,
                    ID_TIPO_FACTURA: factura.ID_TIPO_FACTURA,
                    ID_CLIENTE: factura.ID_CLIENTE,
                    FECHA: factura.FECHA,
                    VENCIMIENTO: factura.VENCIMIENTO,
                    TOTAL: total,
                    detallesFactura: detalleVenta.map((detalle) => ({
                        ID_PRODUCTO: detalle.codigo,
                        CANTIDAD: detalle.cantidad,
                        PRECIO: detalle.precio,
                        DESCUENTO: detalle.descuento,
                    })),
                };
                console.log(facturaData);
                await axios.post('http://localhost:8000/Facturacion/', facturaData);

                // Limpiar el estado de la factura
                setDetalleVenta([]);
                setSubtotal(0);
                setIVA(0);
                setTotal(0);
                limpiarFactura();
            } catch (error) {
                console.error('Error al crear la factura:', error);
            }
        }
    };

    const eliminarDetalle = (index) => {
        setDetalleVenta((prevDetalleVenta) => {
            const newDetalleVenta = [...prevDetalleVenta];
            newDetalleVenta.splice(index, 1);
            return newDetalleVenta;
        });
    };

    const obtenerUltimoIDFactura = async () => {
        try {
            const response = await axios.get('http://localhost:8000/Facturacion/ultimoID');
            const { ultimoID } = response.data;

            if (!isNaN(ultimoID)) {
                setFactura((prevFactura) => ({
                    ...prevFactura,
                    ID_FACTURA: parseInt(ultimoID) + 1,
                }));
            }
        } catch (error) {
            console.error('Error al obtener el último ID de factura:', error);
        }
    };

    const lineasAgregadas = detalleVenta.length;


    const calcularTotalDescuentos = () => {
        const totalDescuentos = detalleVenta.reduce(
            (total, producto) => total + (producto.cantidad * producto.precio * producto.descuento / 100),
            0
        );
        return totalDescuentos;
    };

    const totalDescuentos = calcularTotalDescuentos();

    return (
        <div>
            {/* Formulario para ingresar datos de la factura */}
            <h4>Factura</h4>
           
            <select
                name="ID_COMPANIA"
                value={factura.ID_COMPANIA}
                onChange={handleFacturaChange}
            >
                <option value="">Seleccionar Compañía</option>
                {companias.map((compania) => (
                    <option key={compania.ID_COMPANIA} value={compania.ID_COMPANIA}>
                        {compania.NOMBRE}
                    </option>
                ))}
            </select>
            <select
                name="ID_TIPO_FACTURA"
                value={factura.ID_TIPO_FACTURA}
                onChange={handleFacturaChange}
            >
                <option value="">Seleccionar Tipo de Factura</option>
                {tiposFactura.map((tipoFactura) => (
                    <option
                        key={tipoFactura.ID_TIPO_FACTURA}
                        value={tipoFactura.ID_TIPO_FACTURA}
                    >
                        {tipoFactura.nombre}
                    </option>
                ))}
            </select>
            <select name="ID_CLIENTE" value={factura.ID_CLIENTE} onChange={handleFacturaChange}>
                <option value="">Seleccionar Cliente</option>
                {clientes.map((cliente) => (
                    <option key={cliente.ID_CLIENTE} value={cliente.ID_CLIENTE}>
                        {cliente.NOMBRE}
                    </option>
                ))}
            </select>
            <input
                type="text"
                name="FECHA"
                value={factura.FECHA}
                onChange={handleFacturaChange}
                placeholder="Fecha"
                disabled
            />
            <input
                type="date"
                name="VENCIMIENTO"
                value={factura.VENCIMIENTO}
                onChange={handleFacturaChange}
                placeholder="Vencimiento"
            />

            <input
                type="text"
                name="ID_FACTURA"
                value={factura.ID_FACTURA}
                readOnly
            />

            <br />
            <br />
            <br />
            <br />
            <hr></hr>
            {/* Formulario para ingresar datos del producto */}
            <input
                type="text"
                name="codigo"
                value={codigoProducto}
                onChange={handleCodigoChange}
                placeholder="Código"
            />
            <input
                type="text"
                name="descripcion"
                value={producto.descripcion}
                onChange={handleInputChange}
                placeholder="Descripción"
                disabled
            />
            <input
                type="number"
                name="cantidad"
                value={producto.cantidad}
                onChange={handleInputChange}
                placeholder="Cantidad"
            />
            <input
                type="number"
                name="precio"
                value={producto.precio}
                onChange={handleInputChange}
                placeholder="Precio"
                disabled
            />

            {/* Mostrar el descuento aplicado */}
            <input
                type="text"
                name="descuento"
                value={producto.descuento}
                placeholder="Descuento (%)"
                disabled
            />

            {/* Botón para agregar el producto al detalle de venta */}
            <button onClick={handleAgregarProducto}>Agregar Producto</button>

            {/* Mostrar el detalle de venta */}
            <h4>Detalle de Venta</h4>
            <p>Líneas agregadas: {lineasAgregadas}</p>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descripción</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Descuento (%)</th>
                        <th>Precio Total</th>
                    </tr>
                </thead>
                <tbody>
                    {detalleVenta.map((producto, index) => (
                        <tr key={index}>
                            <td>{producto.codigo}</td>
                            <td>{producto.descripcion}</td>
                            <td>{producto.cantidad}</td>
                            <td>{Number(producto.precio).toFixed(4)}</td>
                            <td>{Number(producto.descuento).toFixed(2)}</td>
                            <td>{Number(producto.precioTotal).toFixed(4)}</td>
                            <td>
                                <button onClick={() => eliminarDetalle(index)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Mostrar el subtotal */}
            <h4>Subtotal: ₡ {subtotal.toFixed(2)}</h4>

            {/* Mostrar el IVA */}
            <h4>IVA: ₡ {iva.toFixed(2)}</h4>

            {/* Mostrar el DESCUENTOS */}
            <h4>Total Descuentos: ₡ {totalDescuentos.toFixed(2)}</h4>

            {/* Mostrar el total */}
            <h4>Total: ₡ {total.toFixed(2)}</h4>
            <button onClick={crearFactura}>Crear Factura</button>
        </div>
    );
};

export default CrearFactura;