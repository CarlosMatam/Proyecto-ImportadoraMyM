import ProveedorSModel from './Proveedor.js';
import PagoSModel from './Pago.js';

ProveedorSModel.hasMany(PagoSModel, { foreignKey: "ID_PROVEEDOR" })
PagoSModel.belongsTo(ProveedorSModel, { foreignKey: "ID_PROVEEDOR" })//Se puede quitar este, hay que ver si corre primero con las dos


export { ProveedorSModel,PagoSModel}
