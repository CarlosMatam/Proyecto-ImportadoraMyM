//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const ProveedorSModel = db.define('TAB_PROVEEDORES', {
    ID_PROVEEDOR: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    NOMBRE: { type: DataTypes.STRING },
    CORREO: {type: DataTypes.STRING},
    TIPO_CEDULA: {type:DataTypes.INTEGER},
    CEDULA: {type:DataTypes.STRING},
})

export default ProveedorSModel