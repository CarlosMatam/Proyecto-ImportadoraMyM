//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const CabysSModel = db.define('TAB_CABYS', {
    CATEGORIA_1: { type: DataTypes.STRING },
    DESCRIPCION_CATEGORIA_1: { type: DataTypes.STRING },
    CATEGORIA_2: { type: DataTypes.STRING },
    DESCRIPCION_CATEGORIA_2: { type: DataTypes.STRING },
    CATEGORIA_3: { type: DataTypes.STRING },
    DESCRIPCION_CATEGORIA_3: { type: DataTypes.STRING },
    CATEGORIA_4: { type: DataTypes.STRING },
    DESCRIPCION_CATEGORIA_4: { type: DataTypes.STRING },
    CATEGORIA_5: { type: DataTypes.STRING },
    DESCRIPCION_CATEGORIA_5: { type: DataTypes.STRING },
    CATEGORIA_6: { type: DataTypes.STRING },
    DESCRIPCION_CATEGORIA_6: { type: DataTypes.STRING },
    CATEGORIA_7: { type: DataTypes.STRING },
    DESCRIPCION_CATEGORIA_7: { type: DataTypes.STRING },
    CATEGORIA_8: { type: DataTypes.STRING },
    DESCRIPCION_CATEGORIA_8: { type: DataTypes.STRING },
    CODIGO_BIEN_SERVICIO: {type: DataTypes.STRING},
    DESCRIPCION_BIEN_SERVICIO: {type: DataTypes.STRING},
    IMPUESTO: {type: DataTypes.STRING},
    ID_CABYS_MYM:{type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
})

export default CabysSModel