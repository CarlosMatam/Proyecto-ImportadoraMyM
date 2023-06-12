//importamos el Modelo
import { TransporteModel } from '../models/Relaciones_transporte.js';

//** Métodos CRUD **/

//Crear registro
export const createTransporte = async (req, res) => {
    try {
        await TransporteModel.create(req.body)
        res.json({
            "message": "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Eliminar registro
export const deleteTransporte = async (req, res) => {
    try {
        await TransporteModel.destroy({
            where: { ID_AGENTE: req.params.ID_AGENTE }
        })
        res.json({
            "message": "¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}


//Modificar registro
export const updateTransporte = async (req, res) => {
    try {
        await TransporteModel.update(req.body, {
            where: { ID_AGENTE: req.params.ID_AGENTE }
        })
        res.json({
            "message": "¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Imprimir registro
export const imprimirTransporte = async (req, res) => {
    try {
        const transporte = await TransporteModel.findOne({
            where: { ID_AGENTE: req.params.ID_AGENTE }
        });
        if (transporte) {
            console.log(transporte.toJSON());
            res.status(200).send(transporte.toJSON());
        } else {
            console.log("Transporte no encontrado");
            res.status(404).send("Transporte no encontrado");
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error al buscar el Transporte");
    }
};


//Buscar un registro
export const getTransporte = async (req, res) => {
    try {
        const agente = await TransporteModel.findAll({
            where: { ID_AGENTE: req.params.ID_AGENTE }
        })
        res.json(agente[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}