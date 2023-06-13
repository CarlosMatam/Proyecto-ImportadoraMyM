//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const TransporteSModel = db.define('TAB_TRANSPORTES', {
    ID_TRANSPORTE: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    NOMBRE: { type: DataTypes.STRING },
})

export default TransporteSModel