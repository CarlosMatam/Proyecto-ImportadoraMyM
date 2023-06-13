//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const TipoCSModel = db.define('TAB_TIPOS_CEDULAS', {
    ID_TIPO_CEDULA: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    DESCRIPCION: { type: DataTypes.STRING },


})

export default TipoCSModel