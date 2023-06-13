// Importa el modelo del agente de ventas
import { ProveedorSModel, Telefono_proveedorSModel } from '../models/Relaciones_proveedor.js';

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllTelefono = async (req, res) => {
    try {
        const telefono = await Telefono_proveedorSModel.findAll({
        })
        res.json(telefono)
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Mostrar un registro
export const getTelefono = async (req, res) => {
    try {
        const telefono = await Telefono_proveedorSModel.findAll({
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
        const { ID_PROVEEDOR, TELEFONO_1, TELEFONO_2, TELEFONO_3 } = req.body;

        // Verifica si existe un agente de ventas con el ID proporcionado
        const proveedor = await ProveedorSModel.findOne({
            where: { ID_PROVEEDOR }
        });

        if (!proveedor) {
            return res.json({ message: 'No se encontró un agente de ventas con el ID proporcionado' });
        }

        // Crea el teléfono y establece la relación con el agente de ventas
        const telefono = await Telefono_proveedorSModel.create({
            TELEFONO_1,
            TELEFONO_2,
            TELEFONO_3,
            ID_PROVEEDOR
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
        await Telefono_proveedorSModel.update(req.body, {
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
        await Telefono_proveedorSModel.destroy({
            where: { ID_TELEFONO: req.params.ID_TELEFONO }
        })
        res.json({
            "message": "¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}