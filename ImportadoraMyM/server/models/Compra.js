// Modelo para la tabla TAB_COMPRAS
import db from "../database/db.js";
import { DataTypes } from "sequelize";
import ProveedorSModel from "./Proveedor.js";
import CompaniasSModel from "./Compania.js";
import BodegaSModel from './Bodega.js';
import ProductoSModel from './Producto.js';


const ComprasSModel = db.define('TAB_COMPRAS', {
    NUM_DOCUMENTO: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    ID_COMPANIA: { type: DataTypes.INTEGER },
    ID_BODEGA: { type: DataTypes.INTEGER },
    ID_PROVEEDOR: { type: DataTypes.INTEGER },
    FECHA: { type: DataTypes.DATE },
    TOTAL: { type: DataTypes.DECIMAL },
    DESCUENTO: { type: DataTypes.DECIMAL },
});

ComprasSModel.belongsTo(ProveedorSModel, { foreignKey: 'ID_PROVEEDOR' });
ComprasSModel.belongsTo(CompaniasSModel, { foreignKey: 'ID_COMPANIA' });
ComprasSModel.belongsTo(BodegaSModel, { foreignKey: 'ID_BODEGA' });


// Modelo para la tabla DETALLE_COMPRAS
const DetalleComprasSModel = db.define('DETALLE_COMPRAS', {
    ID_DETALLE: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    NUM_DOCUMENTO: { type: DataTypes.INTEGER },
    ID_PRODUCTO: { type: DataTypes.STRING },
    CANTIDAD: { type: DataTypes.INTEGER },
    PRECIO: { type: DataTypes.DECIMAL },
    PORC_DESCUENTO: { type: DataTypes.INTEGER },

    SUBTOTAL: { type: DataTypes.DECIMAL },
});

DetalleComprasSModel.belongsTo(ComprasSModel, { foreignKey: 'NUM_DOCUMENTO' });
DetalleComprasSModel.belongsTo(ProductoSModel, { foreignKey: 'ID_PRODUCTO' });
ComprasSModel.hasMany(DetalleComprasSModel, { foreignKey: 'NUM_DOCUMENTO' });

// Exportar los modelos
export { ComprasSModel, DetalleComprasSModel, CompaniasSModel, ProveedorSModel, BodegaSModel, ProductoSModel };