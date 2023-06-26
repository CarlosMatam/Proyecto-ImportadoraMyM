//importamos el Modelo
import CompaniaSModel from "../models/Compania.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllCompania = async (req, res) => {
    try {
        const compania = await CompaniaSModel.findAll({
        })
        res.json(compania)
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Mostrar un registro
export const getCompania = async (req, res) => {
    try {
        const compania = await CompaniaSModel.findAll({
            where: { ID_COMPANIA: req.params.ID_COMPANIA }
        })
        res.json(compania[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Crear un registro
export const createCompania = async (req, res) => {
    try {
        await CompaniaSModel.create(req.body)
        res.json({
            "message": "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Actualizar un registro
export const updateCompania = async (req, res) => {
    try {
        await CompaniaSModel.update(req.body, {
            where: { ID_COMPANIA: req.params.ID_COMPANIA }
        })
        res.json({
            "message": "¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Eliminar un registro
export const deleteCompania = async (req, res) => {
    try {
        await CompaniaSModel.destroy({
            where: { ID_COMPANIA: req.params.ID_COMPANIA }
        })
        res.json({
            "message": "¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}