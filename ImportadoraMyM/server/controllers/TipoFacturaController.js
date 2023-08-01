//importamos el Modelo

import TipoFacturaSModel from "../models/Tipo_factura.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllTipo = async (req, res) => {
    try {
        const tipo = await TipoFacturaSModel.findAll({
        })
        res.json(tipo)
    } catch (error) {
        res.json({ message: error.message })
    }
}
