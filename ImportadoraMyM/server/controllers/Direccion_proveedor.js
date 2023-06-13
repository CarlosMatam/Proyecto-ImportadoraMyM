// Importa el modelo del provvedor
import { ProveedorSModel, Direccion_proveedorSModel } from '../models/Relaciones_proveedor.js';

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllDireccion = async (req, res) => {
    try {
        const direccion = await Direccion_proveedorSModel.findAll({
        })
        res.json(direccion)
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Mostrar un registro
export const getDireccion = async (req, res) => {
    try {
        const direccion = await Direccion_proveedorSModel.findAll({
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
        const { ID_PROVEEDOR, PROVINCIA, CANTON, DISTRITO, BARRIO, OTRAS_SENNAS } = req.body;

        // Verifica si existe un agente de ventas con el ID proporcionado
        const proveedor = await ProveedorSModel.findOne({
            where: { ID_PROVEEDOR }
        });

        if (!proveedor) {
            return res.json({ message: 'No se encontró el proveedor con el ID proporcionado' });
        }

        // Crea la dirección y establece la relación con el agente de ventas
        const direccion = await Direccion_proveedorSModel.create({
            PROVINCIA,
            CANTON,
            DISTRITO,
            BARRIO,
            OTRAS_SENNAS,
            ID_PROVEEDOR
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
        await Direccion_proveedorSModel.update(req.body, {
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
        await Direccion_proveedorSModel.destroy({
            where: { ID_DIRECCION: req.params.ID_DIRECCION }
        })
        res.json({
            "message": "¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}