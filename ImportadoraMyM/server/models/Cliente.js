import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const ClienteSModel = db.define('TAB_CLIENTES', {
    ID_CLIENTE: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    NOMBRE: { type: DataTypes.STRING },
    APELLIDO_PATERNO: { type: DataTypes.STRING },
    APELLIDO_MATERNO: { type: DataTypes.STRING },
    ID_TIPO_CLIENTE:{type: DataTypes.INTEGER},
    CORREO: { type: DataTypes.STRING },
    TIPO_CEDULA: { type: DataTypes.INTEGER },
    CEDULA: { type: DataTypes.STRING },

})

export default ClienteSModel