import FacturacionSModel from './Facturacion.js';
import ProductoSModel from './Producto.js'
import DetalleFacturaSModel from './Detalle_factura.js'



DetalleFacturaSModel.belongsTo(FacturacionSModel, { foreignKey: "ID_FACTURA", onDelete: 'CASCADE' });
DetalleFacturaSModel.hasMany(ProductoSModel, { foreignKey: 'ID_PRODUCTO' });
ProductoSModel.belongsTo(DetalleFacturaSModel, { foreignKey: 'ID_PRODUCTO' });







export { FacturacionSModel, ProductoSModel, DetalleFacturaSModel}



