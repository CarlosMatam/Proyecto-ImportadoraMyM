
import { FacturacionSModel, DetalleFacturaSModel } from '../models/Facturacion.js';


// Crear una factura
export const crearFactura = async (req, res) => {
    try {
        // Obtener los datos de la factura del cuerpo de la solicitud
        const {
            ID_COMPANIA,
            ID_TIPO_FACTURA,
            ID_CLIENTE,
            FECHA,
            VENCIMIENTO,
            TOTAL,
            detalleFactura, // Array de objetos de detalle de factura
        } = req.body;

        // Crear la factura en la base de datos
        const factura = await FacturacionSModel.create({
            ID_COMPANIA,
            ID_TIPO_FACTURA,
            ID_CLIENTE,
            FECHA,
            VENCIMIENTO,
            TOTAL,
        });

        // Crear los registros de detalle de factura asociados a la factura creada
        await Promise.all(
            detalleFactura.map(async (detalle) => {
                await DetalleFacturaSModel.create({
                    ID_FACTURA: factura.ID_FACTURA,
                    ID_PRODUCTO: detalle.ID_PRODUCTO,
                    CANTIDAD: detalle.CANTIDAD,
                    ID_AGENTE: detalle.ID_AGENTE,
                    SUBTOTAL: detalle.SUBTOTAL,
                    DESCUENTO: detalle.DESCUENTO,
                });
            })
        );

        res.json({ message: 'Factura creada correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear la factura' });
    }
};