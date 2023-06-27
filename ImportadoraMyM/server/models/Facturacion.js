

import db from "../database/db.js";
import { DataTypes } from "sequelize";
import ClienteSModel from "./Cliente.js";

const FacturacionSModel = db.define('TAB_FACTURAS', {
    ID_FACTURA: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    ID_COMPANIA: { type: DataTypes.INTEGER },
    ID_TIPO_FACTURA: { type: DataTypes.INTEGER },
    ID_CLIENTE: { type: DataTypes.INTEGER },
    FECHA: { type: DataTypes.DATE },
    VENCIMIENTO: { type: DataTypes.DATE },
    TOTAL: { type: DataTypes.DECIMAL },
});

const DetalleFacturaSModel = db.define('TAB_DETALLE_FACTURAS', {
    ID_DETALLE_FACTURA: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    ID_FACTURA: { type: DataTypes.INTEGER },
    ID_PRODUCTO: { type: DataTypes.STRING },
    CANTIDAD: { type: DataTypes.INTEGER },
    ID_AGENTE: { type: DataTypes.INTEGER },
    SUBTOTAL: { type: DataTypes.DECIMAL },
    DESCUENTO: { type: DataTypes.DECIMAL },
});

//CAMBIAR
FacturacionSModel.hasMany(DetalleFacturaSModel, { foreignKey: 'ID_FACTURA' });
DetalleFacturaSModel.belongsTo(FacturacionSModel, { foreignKey: 'ID_FACTURA' });
FacturacionSModel.belongsTo(ClienteSModel, { foreignKey: 'ID_CLIENTE' });

export { FacturacionSModel, DetalleFacturaSModel };