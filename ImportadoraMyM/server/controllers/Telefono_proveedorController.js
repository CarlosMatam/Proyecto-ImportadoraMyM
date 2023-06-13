// Importa el modelo del agente de ventas
import { Agente_ventaSModel, Telefono_agenteSModel } from '../models/Relaciones_agente_ventas.js';

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllTelefono = async (req, res) => {
    try {
        const telefono = await Telefono_agenteSModel.findAll({
        })
        res.json(telefono)
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Mostrar un registro
export const getTelefono = async (req, res) => {
    try {
        const telefono = await Telefono_agenteSModel.findAll({
            where: {ID_TELEFONO: req.params.ID_TELEFONO }
        })
        res.json(telefono[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}


// Crear un registro
export const createTelefono = async (req, res) => {
    try {
        const { ID_AGENTE, TELEFONO_1, TELEFONO_2, TELEFONO_3 } = req.body;

        // Verifica si existe un agente de ventas con el ID proporcionado
        const agenteDeVentas = await Agente_ventaSModel.findOne({
            where: { ID_AGENTE }
        });

        if (!agenteDeVentas) {
            return res.json({ message: 'No se encontró un agente de ventas con el ID proporcionado' });
        }

        // Crea el teléfono y establece la relación con el agente de ventas
        const telefono = await Telefono_agenteSModel.create({
            TELEFONO_1,
            TELEFONO_2,
            TELEFONO_3,
            ID_AGENTE
        });

        // Obtén el ID del teléfono creado
        const ID_TELEFONO = telefono.ID_TELEFONO;

        res.json({
            ID_TELEFONO,
            "message": "¡Registro creado correctamente!"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}
//Actualizar un registro
export const updateTelefono = async (req, res) => {
    try {
        await Telefono_agenteSModel.update(req.body, {
            where: { ID_TELEFONO: req.params.ID_TELEFONO }
        })
        res.json({
            "message": "¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Eliminar un registro
export const deleteTelefono = async (req, res) => {
    try {
        await Telefono_agenteSModel.destroy({
            where: { ID_TELEFONO: req.params.ID_TELEFONO }
        })
        res.json({
            "message": "¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}