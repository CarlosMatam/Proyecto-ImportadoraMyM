//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const Telefono_transporteSModel = db.define('TAB_TELEFONOS_TRANSPORTES', {
    ID_TELEFONO: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    TELEFONO_1: { type: DataTypes.INTEGER },
    TELEFONO_2: { type: DataTypes.INTEGER },
    TELEFONO_3: { type: DataTypes.INTEGER },
    ID_TRANSPORTE: { type: DataTypes.INTEGER },
})

export default Telefono_transporteSModel