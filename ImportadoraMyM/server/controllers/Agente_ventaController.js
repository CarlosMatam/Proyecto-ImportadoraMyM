//importamos el Modelo
import { Agente_ventaSModel, Direccion_agenteSModel, Telefono_agenteSModel, ZonaSModel } from '../models/Relaciones_agente_ventas.js';

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllAgente = async (req, res) => {
    try {
        const agente = await Agente_ventaSModel.findAll({
            include: 
                [Direccion_agenteSModel, Telefono_agenteSModel, ZonaSModel]
            
           
        })
        res.json(agente)
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Mostrar un registro
export const getAgente = async (req, res) => {
    try {
        const agente = await Agente_ventaSModel.findAll({
            where: { ID_AGENTE: req.params.ID_AGENTE }
        })
        res.json(agente[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Crear un registro
export const createAgente = async (req, res) => {
    try {
        await Agente_ventaSModel.create(req.body)
        res.json({
            "message": "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Actualizar un registro
export const updateAgente = async (req, res) => {
    try {
        await Agente_ventaSModel.update(req.body, {
            where: { ID_AGENTE: req.params.ID_AGENTE }
        })
        res.json({
            "message": "¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Eliminar un registro
export const deleteAgente = async (req, res) => {
    try {
        await Agente_ventaSModel.destroy({
            where: { ID_AGENTE: req.params.ID_AGENTE }
        })
        res.json({
            "message": "¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}