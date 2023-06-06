//importamos el Modelo

/*import { Agente_ventaSModel, Direccion_agenteSModel, Telefono_agenteSModel, ZonaSModel } from '../models/Relaciones_agente_ventas.js';*/

import ProveedorSModel from "../models/Proveedor";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllProveedor = async (req, res) => {
    try {
        const proveedor = await ProveedorSModel.findAll({
            
            
           
        })
        res.json(proveedor)
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Mostrar un registro
export const getProveedor = async (req, res) => {
    try {
        const proveedor = await ProveedorSModel.findAll({
            where: { ID_PROVEEDOR: req.params.ID_PROVEEDOR }
        })
        res.json(proveedor[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Crear un registro
export const createProveedor = async (req, res) => {
    try {
        await ProveedorSModel.create(req.body)
        res.json({
            "message": "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Actualizar un registro
export const updateProveedor = async (req, res) => {
    try {
        await ProveedorSModel.update(req.body, {
            where: { ID_PROVEEDOR: req.params.ID_PROVEEDOR }
        })
        res.json({
            "message": "¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Eliminar un registro
export const deleteProveedor = async (req, res) => {
    try {
        await ProveedorSModel.destroy({
            where: { ID_PROVEEDOR: req.params.ID_PROVEEDOR }
        })
        res.json({
            "message": "¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}