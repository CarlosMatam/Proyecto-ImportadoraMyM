import ProveedorSModel from './Proveedor.js';
import PagoSModel from './Pago.js';

ProveedorSModel.hasMany(PagoSModel,{foreignKey: "id_proveedor"})



export { ProveedorSModel,PagoSModel}
