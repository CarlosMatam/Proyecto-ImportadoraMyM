//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const Telefono_agenteSModel = db.define('TAB_TELEFONOS_AGENTES_VENTAS', {
    ID_TELEFONO: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    TELEFONO_1: { type: DataTypes.INTEGER },
    TELEFONO_2: { type: DataTypes.INTEGER },
    TELEFONO_3: { type: DataTypes.INTEGER },
    ID_AGENTE: { type: DataTypes.INTEGER },
    

})

export default Telefono_agenteSModel