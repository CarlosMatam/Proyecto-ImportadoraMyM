//importamos el Modelo

import {TipoCSModel} from "../models/Relaciones_cliente.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllTipo = async (req, res) => {
    try {
        const tipo = await TipoCSModel.findAll({
        })
        res.json(tipo)
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Mostrar un registro
export const getTipo = async (req, res) => {
    try {
        const tipo = await TipoCSModel.findAll({
            where: { ID_TIPO_CEDULA: req.params.ID_TIPO_CEDULA }
        })
        res.json(tipo[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Crear un registro
export const createTipo = async (req, res) => {
    try {
        await TipoCSModel.create(req.body)
        res.json({
            "message": "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Actualizar un registro
export const updateTipo = async (req, res) => {
    try {
        await TipoCSModel.update(req.body, {
            where: { ID_TIPO_CEDULA: req.params.ID_TIPO_CEDULA }
        })
        res.json({
            "message": "¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Eliminar un registro
export const deleteTipo = async (req, res) => {
    try {
        await TipoCSModel.destroy({
            where: { ID_TIPO_CEDULA: req.params.ID_TIPO_CEDULA }
        })
        res.json({
            "message": "¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}