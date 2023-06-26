import ProductoSModel from './Producto.js';
import ProveedorSModel from './Proveedor.js';
import CompaniaSModel from './Compania.js';

ProveedorSModel.hasMany(ProductoSModel,{foreignKey: "PROVEEDOR", onDelete: 'CASCADE' })
CompaniaSModel.hasMany(ProductoSModel,{foreignKey: "COMPANIA", onDelete: 'CASCADE' })

export { ProveedorSModel, ProductoSModel, CompaniaSModel }