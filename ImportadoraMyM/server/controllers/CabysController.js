//importamos el Modelo
import CabysSModel from "../models/Cabys.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllCabys = async (req, res) => {
    try {
        const cabys = await CabysSModel.findAll({
        })
        res.json(cabys)
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Mostrar un registro
export const getCabys = async (req, res) => {
    try {
        const cabys = await CabysSModel.findAll({
            where: { ID_CABYS_MYM: req.params.ID_CABYS_MYM }
        })
        res.json(cabys[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Crear un registro
export const createCabys = async (req, res) => {
    try {
        await CabysSModel.create(req.body)
        res.json({
            "message": "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Actualizar un registro
export const updateCabys = async (req, res) => {
    try {
        await CabysSModel.update(req.body, {
            where: { ID_CABYS_MYM: req.params.ID_CABYS_MYM }
        })
        res.json({
            "message": "¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Eliminar un registro
export const deleteCabys = async (req, res) => {
    try {
        await CabysSModel.destroy({
            where: { ID_CABYS_MYM: req.params.ID_CABYS_MYM }
        })
        res.json({
            "message": "¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}