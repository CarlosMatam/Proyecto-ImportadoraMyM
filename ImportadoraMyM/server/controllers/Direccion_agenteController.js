

// Importa el modelo del agente de ventas
import { Agente_ventaSModel, Direccion_agenteSModel } from '../models/Relaciones_agente_ventas.js';

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllDireccion = async (req, res) => {
    try {
        const direccion = await Direccion_agenteSModel.findAll({
        })
        res.json(direccion)
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Mostrar un registro
export const getDireccion = async (req, res) => {
    try {
        const direccion = await Direccion_agenteSModel.findAll({
            where: { ID_DIRECCION: req.params.ID_DIRECCION }
        })
        res.json(direccion[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}


// Crear un registro
export const createDireccion = async (req, res) => {
    try {
        const { ID_AGENTE, PROVINCIA, CANTON, DISTRITO, BARRIO, OTRAS_SENNAS } = req.body;

        // Verifica si existe un agente de ventas con el ID proporcionado
        const agenteDeVentas = await Agente_ventaSModel.findOne({
            where: { ID_AGENTE }
        });

        if (!agenteDeVentas) {
            return res.json({ message: 'No se encontró un agente de ventas con el ID proporcionado' });
        }

        // Crea la dirección y establece la relación con el agente de ventas
        const direccion = await Direccion_agenteSModel.create({
            PROVINCIA,
            CANTON,
            DISTRITO,
            BARRIO,
            OTRAS_SENNAS,
            ID_AGENTE
        });

        // Obtén el ID de la dirección creada
        const ID_DIRECCION = direccion.ID_DIRECCION;

        res.json({
            ID_DIRECCION,
            "message": "¡Registro creado correctamente!"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}
//Actualizar un registro
export const updateDireccion = async (req, res) => {
    try {
        await Direccion_agenteSModel.update(req.body, {
            where: { ID_DIRECCION: req.params.ID_DIRECCION }
        })
        res.json({
            "message": "¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Eliminar un registro
export const deleteDireccion = async (req, res) => {
    try {
        await Direccion_agenteSModel.destroy({
            where: { ID_DIRECCION: req.params.ID_DIRECCION }
        })
        res.json({
            "message": "¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}