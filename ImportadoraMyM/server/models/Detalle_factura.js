//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const DetalleFacturaSModel = db.define('TAB_DETALLE_FACTURAS', {
    ID_DETALLE_FACTURA: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    ID_FACTURA: { type: DataTypes.INTEGER },
    ID_PRODUCTO: { type: DataTypes.INTEGER },
    CANTIDAD: { type: DataTypes.INTEGER },
    SUBTOTAL: { type: DataTypes.DECIMAL },
    DESCUENTO: { type: DataTypes.NUMBER },



})

export default DetalleFacturaSModel