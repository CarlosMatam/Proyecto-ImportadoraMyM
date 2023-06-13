//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const CobroSModel = db.define('TAB_COBROS', {
    ID_COBRO: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    FECHA_INGRESO: { type: DataTypes.DATE},
    MONTO: { type: DataTypes.DECIMAL },
    ESTADO: { type: DataTypes.TINYINT },
    ID_CLIENTE: { type: DataTypes.INTEGER },
})

export default CobroSModel