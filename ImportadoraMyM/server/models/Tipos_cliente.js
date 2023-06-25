//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const Tipo_clienteSModel = db.define('TAB_TIPOS_CLIENTE', {
    ID_TIPO_CLIENTE: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    NOMBRE:{type:DataTypes.STRING},
    DESCRIPCION: { type: DataTypes.STRING },

})

export default Tipo_clienteSModel