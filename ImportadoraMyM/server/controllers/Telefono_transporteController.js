import {TransporteSModel,Telefono_transporteSModel} from "../models/Relaciones_transporte.js"

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllTelefono = async (req, res) => {
    try {
        const telefono = await Telefono_transporteSModel.findAll({
        })
        res.json(telefono)
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Mostrar un registro
export const getTelefono = async (req, res) => {
    try {
        const telefono = await Telefono_transporteSModel.findAll({
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
        const { ID_TRANSPORTE, TELEFONO_1, TELEFONO_2, TELEFONO_3, } = req.body;

        // Verifica si existe un agente de ventas con el ID proporcionado
        const transporte = await TransporteSModel.findOne({
            where: { ID_TRANSPORTE }
        });

        if (!transporte) {
            return res.json({ message: 'No se encontró un transporte con el ID proporcionado' });
        }

        // Crea el teléfono y establece la relación con el agente de ventas
        const telefono = await Telefono_transporteSModel.create({
            TELEFONO_1,
            TELEFONO_2,
            TELEFONO_3,
            ID_TRANSPORTE
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
        await Telefono_transporteSModel.update(req.body, {
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
        await Telefono_transporteSModel.destroy({
            where: { ID_TELEFONO: req.params.ID_TELEFONO }
        })
        res.json({
            "message": "¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}