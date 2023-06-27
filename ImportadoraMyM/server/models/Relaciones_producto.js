
import ProductoSModel from './Producto.js';
import ProveedorSModel from './Proveedor.js';
import CompaniaSModel from './Compania.js';

ProveedorSModel.hasMany(ProductoSModel, { foreignKey: "PROVEEDOR" })
CompaniaSModel.hasMany(ProductoSModel, { foreignKey: "COMPANIA" })

export { ProveedorSModel, ProductoSModel, CompaniaSModel }