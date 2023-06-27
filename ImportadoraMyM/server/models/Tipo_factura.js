//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const TipoFacturaSModel = db.define('TIPO_FACTURA', {
    id_factura: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING },


})

export default TipoFacturaSModel