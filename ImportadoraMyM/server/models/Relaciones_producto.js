
import ProductoSModel from './Producto.js';
import ProveedorSModel from './Proveedor.js';
import CompaniaSModel from './Compania.js';
import CabysSModel from './Cabys.js';

ProveedorSModel.hasMany(ProductoSModel, { foreignKey: "PROVEEDOR" })
CompaniaSModel.hasMany(ProductoSModel, { foreignKey: "COMPANIA" })
ProductoSModel.belongsTo(CabysSModel,{foreignKey: "CABYS"})

export { ProveedorSModel, ProductoSModel, CompaniaSModel, CabysSModel }