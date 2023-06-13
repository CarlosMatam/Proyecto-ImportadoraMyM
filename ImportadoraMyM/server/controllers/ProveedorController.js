//importamos el Modelo
import { ProveedorSModel, Direccion_proveedorSModel, Telefono_proveedorSModel, TipoCSModel } from '../models/Relaciones_proveedor.js';

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllProveedor = async (req, res) => {
    try {
        const proveedor = await ProveedorSModel.findAll({
            include:
                [Direccion_proveedorSModel, Telefono_proveedorSModel, TipoCSModel]


        })
        res.json(proveedor)
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Mostrar un registro
export const getProveedor = async (req, res) => {
    try {
        const proveedor = await ProveedorSModel.findAll({
            where: { ID_PROVEEDOR: req.params.ID_PROVEEDOR }
        })
        res.json(proveedor[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Crear un registro
export const createProveedor = async (req, res) => {
    try {
        const proveedor = await ProveedorSModel.create(req.body)
        const proveedorId = proveedor.ID_PROVEEDOR;

        res.json({
            ID_PROVEEDOR: proveedorId,
            "message": "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Actualizar un registro
export const updateProveedor = async (req, res) => {
    const { ID_PROVEEDOR } = req.params;

    try {
        // Actualiza los datos del agente
        await ProveedorSModel.update(
            {
                NOMBRE: req.body.NOMBRE,
                CORREO: req.body.CORREO,
                TIPO_CEDULA: req.body.TIPO_CEDULA,
                CEDULA: req.body.CEDULA,
            
            },
            {
                where: { ID_PROVEEDOR },
            }
        );

        // Actualiza los teléfonos del agente
        await Telefono_proveedorSModel.update(
            {
                TELEFONO_1: req.body.TELEFONO_1,
                TELEFONO_2: req.body.TELEFONO_2,
                TELEFONO_3: req.body.TELEFONO_3,
            },
            {
                where: { ID_PROVEEDOR },
            }
        );

        // Actualiza las direcciones del agente
        await Direccion_proveedorSModel.update(
            {
                PROVINCIA: req.body.PROVINCIA,
                CANTON: req.body.CANTON,
                DISTRITO: req.body.DISTRITO,
                BARRIO: req.body.BARRIO,
                OTRAS_SENNAS: req.body.OTRAS_SENNAS,
            },
            {
                where: { ID_PROVEEDOR },
            }
        );

        res.json({
            message: "Registro actualizado correctamente",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};
//Eliminar un registro
export const deleteProveedor = async (req, res) => {
    try {
        const { ID_PROVEEDOR } = req.params;

        // Buscar el agente de ventas por su ID junto con sus relaciones asociadas
        const proveedor = await ProveedorSModel.findOne({
            where: { ID_PROVEEDOR },
            include: [Telefono_proveedorSModel, Direccion_proveedorSModel]
        });

        if (!proveedor) {
            return res.json({ message: 'No se encontró un proveedor con el ID proporcionado' });
        }

        // Eliminar las relaciones asociadas (telefonos y direcciones)
        await Telefono_proveedorSModel.destroy({
            where: { ID_PROVEEDOR }
        });

        await Direccion_proveedorSModel.destroy({
            where: { ID_PROVEEDOR }
        });

        // Eliminar el agente de ventas
        await proveedor.destroy();

        res.json({
            message: '¡Registro eliminado correctamente!'
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
