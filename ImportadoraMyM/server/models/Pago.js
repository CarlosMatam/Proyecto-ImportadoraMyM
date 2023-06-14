//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const PagoSModel = db.define('TAB_PAGOS', {
    ID_PAGO: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    FECHA_INGRESO: { type: DataTypes.DATE},
    MONTO: { type: DataTypes.NUMBER },
    ESTADO: { type: DataTypes.TINYINT },
    ID_PROVEEDOR: { type: DataTypes.INTEGER },
})

export default PagoSModel