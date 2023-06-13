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
        const agenteDeVentas = await Agente_ventaSModel.create(req.body)
        const agenteVentaId = agenteDeVentas.ID_AGENTE;

        res.json({
            ID_AGENTE: agenteVentaId,
            "message": "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Actualizar un registro
export const updateAgente = async (req, res) => {
    const { ID_AGENTE } = req.params;

    try {
        // Actualiza los datos del agente
        await Agente_ventaSModel.update(
            {
                NOMBRE: req.body.NOMBRE,
                APELLIDO_PATERNO: req.body.APELLIDO_PATERNO,
                APELLIDO_MATERNO: req.body.APELLIDO_MATERNO,
                COMISION_POR_VENTA: req.body.COMISION_POR_VENTA,
                ID_ZONA: req.body.ID_ZONA,
                IDENTIFICACION: req.body.IDENTIFICACION,
            },
            {
                where: { ID_AGENTE },
            }
        );

        // Actualiza los teléfonos del agente
        await Telefono_agenteSModel.update(
            {
                TELEFONO_1: req.body.TELEFONO_1,
                TELEFONO_2: req.body.TELEFONO_2,
                TELEFONO_3: req.body.TELEFONO_3,
            },
            {
                where: { ID_AGENTE },
            }
        );

        // Actualiza las direcciones del agente
        await Direccion_agenteSModel.update(
            {
                PROVINCIA: req.body.PROVINCIA,
                CANTON: req.body.CANTON,
                DISTRITO: req.body.DISTRITO,
                BARRIO: req.body.BARRIO,
                OTRAS_SENNAS: req.body.OTRAS_SENNAS,
            },
            {
                where: { ID_AGENTE },
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
export const deleteAgente = async (req, res) => {
    try {
        const { ID_AGENTE } = req.params;

        // Buscar el agente de ventas por su ID junto con sus relaciones asociadas
        const agente = await Agente_ventaSModel.findOne({
            where: { ID_AGENTE },
            include: [Telefono_agenteSModel, Direccion_agenteSModel]
        });

        if (!agente) {
            return res.json({ message: 'No se encontró un agente de ventas con el ID proporcionado' });
        }

        // Eliminar las relaciones asociadas (telefonos y direcciones)
        await Telefono_agenteSModel.destroy({
            where: { ID_AGENTE }
        });

        await Direccion_agenteSModel.destroy({
            where: { ID_AGENTE }
        });

        // Eliminar el agente de ventas
        await agente.destroy();

        res.json({
            message: '¡Registro eliminado correctamente!'
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
