import  BodegaSModel  from '../models/Bodega.js';


//Mostrar todos los registros
export const getAllCompras = async (req, res) => {
    try {
        const compras = await BodegaSModel.findAll({
        })
        res.json(compras)
    } catch (error) {
        res.json({ message: error.message })
    }
}