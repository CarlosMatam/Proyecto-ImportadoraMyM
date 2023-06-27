//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const LogeoSModel = db.define('TAB_USUARIOS', {
    ID_USUARIO: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    LOGIN_USER: { type: DataTypes.STRING },
    CONTRASENNA: { type: DataTypes.STRING },
    ID_ROL: { type: DataTypes.INTEGER },
    
})

export default LogeoSModel