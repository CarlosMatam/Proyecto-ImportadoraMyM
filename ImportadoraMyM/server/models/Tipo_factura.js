//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const TipoFacturaSModel = db.define('TAB_TIPOS_FACTURAS', {
    ID_TIPO_FACTURA: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING },


})

export default TipoFacturaSModel