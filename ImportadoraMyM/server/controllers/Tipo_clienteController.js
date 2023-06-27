//importamos el Modelo

import { Tipo_clienteSModel } from "../models/Relaciones_cliente.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllTipo = async (req, res) => {
    try {
        const tipo = await Tipo_clienteSModel.findAll({
        })
        res.json(tipo)
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Mostrar un registro
export const getTipo = async (req, res) => {
    try {
        const tipo = await Tipo_clienteSModel.findAll({
            where: { ID_TIPO_CLIENTE: req.params.ID_TIPO_CLIENTE }
        })
        res.json(tipo[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Crear un registro
export const createTipo = async (req, res) => {
    try {
        await Tipo_clienteSModel.create(req.body)
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
        await Tipo_clienteSModel.update(req.body, {
            where: { ID_TIPO_CLIENTE: req.params.ID_TIPO_CLIENTE }
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
        await Tipo_clienteSModel.destroy({
            where: { ID_TIPO_CLIENTE: req.params.ID_TIPO_CLIENTE }
        })
        res.json({
            "message": "¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}