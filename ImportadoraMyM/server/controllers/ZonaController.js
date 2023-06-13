//importamos el Modelo

import ZonaSModel from "../models/Zona.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllZona = async (req, res) => {
    try {
        const zona = await ZonaSModel.findAll({
        })
        res.json(zona)
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Mostrar un registro
export const getZona = async (req, res) => {
    try {
        const zona = await ZonaSModel.findAll({
            where: { ID_ZONA: req.params.ID_ZONA }
        })
        res.json(zona[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Crear un registro
export const createZona = async (req, res) => {
    try {
        await ZonaSModel.create(req.body)
        res.json({
            "message": "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Actualizar un registro
export const updateZona = async (req, res) => {
    try {
        await ZonaSModel.update(req.body, {
            where: { ID_ZONA: req.params.ID_ZONA }
        })
        res.json({
            "message": "¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Eliminar un registro
export const deleteZona = async (req, res) => {
    try {
        await ZonaSModel.destroy({
            where: { ID_ZONA: req.params.ID_ZONA }
        })
        res.json({
            "message": "¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}