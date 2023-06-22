//importamos el Modelo
import {TransporteSModel,Telefono_transporteSModel} from "../models/Relaciones_transporte.js"

//** Métodos CRUD **/

//Crear registro
export const createTransporte = async (req, res) => {
    try {
        const transporte = await TransporteSModel.create(req.body)
        const transporteId = transporte.ID_TRANSPORTE;

        res.json({
            ID_TRANSPORTE: transporteId,
            "message": "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
};

//Eliminar registro
export const deleteTransporte = async (req, res) => {
    try {
        const { ID_TRANSPORTE } = req.params;

        // Buscar el agente de ventas por su ID junto con sus relaciones asociadas
        const transporte = await TransporteSModel.findOne({
            where: { ID_TRANSPORTE },
            include: [Telefono_transporteSModel]
        });

        if (!transporte) {
            return res.json({ message: 'No se encontró un transporte con el ID proporcionado' });
        }

        // Eliminar las relaciones asociadas (telefonos y direcciones)
        await Telefono_transporteSModel.destroy({
            where: { ID_TRANSPORTE }
        });

        // Eliminar el agente de ventas
        await transporte.destroy();

        res.json({
            message: '¡Registro eliminado correctamente!'
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//Modificar registro
export const updateTransporte = async (req, res) => {
    const { ID_TRANSPORTE } = req.params;

    try {
        // Actualiza los datos del agente
        await TransporteSModel.update(
            {
                NOMBRE: req.body.NOMBRE,
            },
            {
                where: { ID_TRANSPORTE },
            }
        );

        // Actualiza los teléfonos del agente
        await Telefono_transporteSModel.update(
            {
                TELEFONO_1: req.body.TELEFONO_1,
                TELEFONO_2: req.body.TELEFONO_2,
                TELEFONO_3: req.body.TELEFONO_3,
            },
            {
                where: { ID_TRANSPORTE },
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




//Buscar un registro
export const getTransporte = async (req, res) => {
    try {
        const transporte = await TransporteSModel.findAll({
            where: { ID_TRANSPORTE: req.params.ID_TRANSPORTE }
        })
        res.json(transporte[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getAllTransporte = async (req, res) => {
    try {
        const transporte = await TransporteSModel.findAll({
            include:
                [Telefono_transporteSModel]


        })
        res.json(transporte)
    } catch (error) {
        res.json({ message: error.message })
    }
}