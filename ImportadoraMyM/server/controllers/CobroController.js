//importamos el Modelo
import { ClienteSModel, CobroSModel} from '../models/Relaciones_cobro.js';


//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllCobro = async (req, res) => {
    try {
        const cobro = await CobroSModel.findAll({
            include:
                [ClienteSModel]

        })
        res.json(cobro)
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Mostrar un registro
export const getCobro = async (req, res) => {
    try {
        const cobro = await CobroSModel.findAll({
            where: { ID_COBRO: req.params.ID_COBRO }
        })
        res.json(cobro[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Crear un registro
export const createCobro = async (req, res) => {
    try {
        const { ID_CLIENTE, FECHA_INGRESO, MONTO, ESTADO } = req.body;
        const cliente = await ClienteSModel.findOne({
            where: { ID_CLIENTE }
        });
        if (!cliente) {
            return res.json({ message: 'No se encontró un cliente con el ID proporcionado' });
        }
        await CobroSModel.create(req.body)
        res.json({
            "message": "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Actualizar un registro
export const updateCobro = async (req, res) => {
    try {
        await CobroSModel.update(req.body, {
            where: { ID_COBRO: req.params.ID_COBRO }
        })
        res.json({
            "message": "¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Eliminar un registro
export const deleteCobro = async (req, res) => {
    try {
        await CobroSModel.destroy({
            where: { ID_COBRO: req.params.ID_COBRO }
        })
        res.json({
            "message": "¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}