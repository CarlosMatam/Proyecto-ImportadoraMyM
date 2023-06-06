//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const Agente_ventaSModel = db.define('TAB_AGENTES_VENTAS', {
    ID_AGENTE: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    NOMBRE: { type: DataTypes.STRING},
    APELLIDO_PATERNO: { type: DataTypes.STRING },
    APELLIDO_MATERNO: { type: DataTypes.STRING },
    ID_DIRECCION: { type: DataTypes.INTEGER },
    ID_TELEFONO: { type: DataTypes.INTEGER },
    COMISION_POR_VENTA: { type: DataTypes.STRING },
    ID_ZONA: { type: DataTypes.INTEGER },
    
    
    
})

export default Agente_ventaSModel