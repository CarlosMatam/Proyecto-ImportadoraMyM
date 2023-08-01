import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const BodegaSModel = db.define('TAB_BODEGAS', {
    ID_BODEGA: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    NOMBRE: { type: DataTypes.STRING },
    DESCRIPCION: { type: DataTypes.STRING }

})

export default BodegaSModel