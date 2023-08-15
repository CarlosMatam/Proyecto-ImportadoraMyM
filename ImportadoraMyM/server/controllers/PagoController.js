//importamos el Modelo
import {PagoSModel,ProveedorSModel} from '../models/Relaciones_pago.js';

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllPago = async (req, res) => {
    try {
        const pago = await PagoSModel.findAll({
            include: 
                [ProveedorSModel]
        })
        res.json(pago)
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Mostrar un registro
export const getPago = async (req, res) => {
    try {
        const pago = await PagoSModel.findAll({
            where: { ID_PAGO: req.params.ID_PAGO }
        })
        res.json(pago[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Crear un registro
export const createPago = async (req, res) => {

    try {
        const { ID_PROVEEDOR, FECHA_INGRESO, MONTO, ESTADO } = req.body;
        console.log(req.body);
        const proveedor = await ProveedorSModel.findOne({
            where: { ID_PROVEEDOR }
        });
        if (!proveedor) {
            return res.json({ message: 'No se encontró un proveedor con el ID proporcionado' });
        }
        await PagoSModel.create(req.body)
        res.json({
            "message": "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Actualizar un registro
export const updatePago = async (req, res) => {
    try {
        await PagoSModel.update(req.body, {
            where: { ID_PAGO: req.params.ID_PAGO }
        })
        res.json({
            "message": "¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Eliminar un registro
export const deletePago = async (req, res) => {
    try {
        await PagoSModel.destroy({
            where: { ID_PAGO: req.params.ID_PAGO }
        })
        res.json({
            "message": "¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}