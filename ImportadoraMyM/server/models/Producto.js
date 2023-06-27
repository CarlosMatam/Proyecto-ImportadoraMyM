
//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const ProductoSModel = db.define('TAB_PRODUCTOS', {
    ID_PRODUCTO: { type: DataTypes.STRING, autoIncrement: false, primaryKey: true },
    NOMBRE: { type: DataTypes.STRING },
    DESCRIPCION: { type: DataTypes.STRING },
    PROVEEDOR: { type: DataTypes.INTEGER },
    PRECIO: { type: DataTypes.NUMBER },
    DESCUENTO: { type: DataTypes.NUMBER },
    PORCENTAJE_GANANCIA_1: { type: DataTypes.NUMBER },
    PORCENTAJE_GANANCIA_2: { type: DataTypes.NUMBER },
    PORCENTAJE_GANANCIA_3: { type: DataTypes.NUMBER },
    EXISTENCIA_ACTUAL: { type: DataTypes.INTEGER },
    CABYS: { type: DataTypes.STRING },
    COMPANIA: { type: DataTypes.INTEGER },
    FECHA_INGRESO: { type: DataTypes.DATE },
})

export default ProductoSModel