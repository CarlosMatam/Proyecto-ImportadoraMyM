//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const Direccion_clienteSModel = db.define('TAB_DIRECCIONES_CLIENTES', {
    ID_DIRECCION: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    PROVINCIA: { type: DataTypes.STRING },
    CANTON: { type: DataTypes.STRING },
    DISTRITO: { type: DataTypes.STRING },
    BARRIO: { type: DataTypes.STRING },
    OTRAS_SENNAS: { type: DataTypes.STRING },
    ID_CLIENTE: { type: DataTypes.INTEGER },


})

export default Direccion_clienteSModel