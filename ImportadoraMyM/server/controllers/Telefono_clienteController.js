// Importa el modelo del agente de ventas
import { ClienteSModel, Telefono_clienteSModel } from '../models/Relaciones_cliente.js';

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllTelefono = async (req, res) => {
    try {
        const telefono = await Telefono_clienteSModel.findAll({
        })
        res.json(telefono)
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Mostrar un registro
export const getTelefono = async (req, res) => {
    try {
        const telefono = await Telefono_clienteSModel.findAll({
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
        const { ID_CLIENTE, TELEFONO_1, TELEFONO_2, TELEFONO_3 } = req.body;

        // Verifica si existe un agente de ventas con el ID proporcionado
        const cliente = await ClienteSModel.findOne({
            where: { ID_CLIENTE }
        });

        if (!cliente) {
            return res.json({ message: 'No se encontró un cliente con el ID proporcionado' });
        }

        // Crea el teléfono y establece la relación con el agente de ventas
        const telefono = await Telefono_clienteSModel.create({
            TELEFONO_1,
            TELEFONO_2,
            TELEFONO_3,
            ID_CLIENTE
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
        await Telefono_clienteSModel.update(req.body, {
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
        await Telefono_clienteSModel.destroy({
            where: { ID_TELEFONO: req.params.ID_TELEFONO }
        })
        res.json({
            "message": "¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}