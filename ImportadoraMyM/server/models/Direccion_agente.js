//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const Direccion_agenteSModel = db.define('TAB_DIRECCIONES_AGENTES_VENTAS', {
    ID_DIRECCION: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    PROVINCIA: { type: DataTypes.STRING },
    CANTON: { type: DataTypes.STRING },
    DISTRITO: { type: DataTypes.STRING },
    BARRIO: { type: DataTypes.STRING },
    OTRAS_SENNAS: { type: DataTypes.STRING },
    ID_AGENTE: { type: DataTypes.INTEGER },


})

export default Direccion_agenteSModel