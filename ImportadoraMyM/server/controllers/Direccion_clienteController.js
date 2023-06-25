// Importa el modelo del agente de ventas
import { ClienteSModel, Direccion_clienteSModel } from '../models/Relaciones_cliente.js';

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllDireccion = async (req, res) => {
    try {
        const direccion = await Direccion_clienteSModel.findAll({
        })
        res.json(direccion)
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Mostrar un registro
export const getDireccion = async (req, res) => {
    try {
        const direccion = await Direccion_clienteSModel.findAll({
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
        const { ID_CLIENTE, PROVINCIA, CANTON, DISTRITO, BARRIO, OTRAS_SENNAS } = req.body;

        // Verifica si existe un agente de ventas con el ID proporcionado
        const cliente = await ClienteSModel.findOne({
            where: { ID_CLIENTE }
        });

        if (!cliente) {
            return res.json({ message: 'No se encontró un cliente con el ID proporcionado' });
        }

        // Crea la dirección y establece la relación con el agente de ventas
        const direccion = await Direccion_clienteSModel.create({
            PROVINCIA,
            CANTON,
            DISTRITO,
            BARRIO,
            OTRAS_SENNAS,
            ID_CLIENTE
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
        await Direccion_clienteSModel.update(req.body, {
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
        await Direccion_clienteSModel.destroy({
            where: { ID_DIRECCION: req.params.ID_DIRECCION }
        })
        res.json({
            "message": "¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}