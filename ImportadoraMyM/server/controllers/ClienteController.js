//importamos el Modelo
import { ClienteSModel, Direccion_clienteSModel, Telefono_clienteSModel, Tipo_clienteSModel, TipoCSModel } from '../models/Relaciones_cliente.js';

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllCliente = async (req, res) => {
    try {
        const cliente = await ClienteSModel.findAll({
            include:
                [Direccion_clienteSModel, Telefono_clienteSModel, Tipo_clienteSModel, TipoCSModel]


        })
        res.json(cliente)
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Mostrar un registro
export const getCliente = async (req, res) => {
    try {
        const cliente = await ClienteSModel.findAll({
            where: { ID_CLIENTE: req.params.ID_CLIENTE }
        })
        res.json(cliente[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Crear un registro
export const createCliente = async (req, res) => {
    try {
        const cliente = await ClienteSModel.create(req.body)
        const clienteId = cliente.ID_CLIENTE;

        res.json({
            ID_CLIENTE: clienteId,
            "message": "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Actualizar un registro
export const updateCliente = async (req, res) => {
    const { ID_CLIENTE } = req.params;

    try {
        // Actualiza los datos del agente
        await ClienteSModel.update(
            {
                NOMBRE: req.body.NOMBRE,
                APELLIDO_PATERNO: req.body.APELLIDO_PATERNO,
                APELLIDO_MATERNO: req.body.APELLIDO_MATERNO,
                ID_TIPO_CLIENTE: req.body.ID_TIPO_CLIENTE,
                CORREO: req.body.CORREO,
                TIPO_CEDULA: req.body.TIPO_CEDULA,
                CEDULA: req.body.CEDULA,
            },
            {
                where: { ID_CLIENTE },
            }
        );

        // Actualiza los teléfonos del agente
        await Telefono_clienteSModel.update(
            {
                TELEFONO_1: req.body.TELEFONO_1,
                TELEFONO_2: req.body.TELEFONO_2,
                TELEFONO_3: req.body.TELEFONO_3,
            },
            {
                where: { ID_CLIENTE },
            }
        );

        // Actualiza las direcciones del agente
        await Direccion_clienteSModel.update(
            {
                PROVINCIA: req.body.PROVINCIA,
                CANTON: req.body.CANTON,
                DISTRITO: req.body.DISTRITO,
                BARRIO: req.body.BARRIO,
                OTRAS_SENNAS: req.body.OTRAS_SENNAS,
            },
            {
                where: { ID_CLIENTE },
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
export const deleteCliente = async (req, res) => {
    try {
        const { ID_CLIENTE } = req.params;

        // Buscar el agente de ventas por su ID junto con sus relaciones asociadas
        const cliente = await ClienteSModel.findOne({
            where: { ID_CLIENTE },
            include: [Telefono_clienteSModel, Direccion_clienteSModel]
        });

        if (!cliente) {
            return res.json({ message: 'No se encontró un cliente con el ID proporcionado' });
        }

        // Eliminar las relaciones asociadas (telefonos y direcciones)
        await Telefono_clienteSModel.destroy({
            where: { ID_CLIENTE }
        });

        await Direccion_clienteSModel.destroy({
            where: { ID_CLIENTE }
        });

        // Eliminar el agente de ventas
        await cliente.destroy();

        res.json({
            message: '¡Registro eliminado correctamente!'
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
