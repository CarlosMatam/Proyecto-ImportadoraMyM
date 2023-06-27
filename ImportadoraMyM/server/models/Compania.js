//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const CompaniasSModel = db.define('TAB_COMPANIAS', {
    ID_COMPANIA: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    NOMBRE: { type: DataTypes.STRING },
})

export default CompaniasSModel