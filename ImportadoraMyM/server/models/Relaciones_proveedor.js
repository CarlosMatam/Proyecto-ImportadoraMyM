import TipoCSModel from './Tipos_cedula.js';
import Telefono_proveedorSModel from './Telefono_proveedor.js';
import Direccion_proveedorSModel from './Direccion_proveedor.js';
import ProveedorSModel from './Proveedor.js'



ProveedorSModel.hasOne(Direccion_proveedorSModel, { foreignKey: "ID_PROVEEDOR", onDelete: 'CASCADE' });
ProveedorSModel.hasOne(Telefono_proveedorSModel, { foreignKey: "ID_PROVEEDOR", onDelete: 'CASCADE' });

ProveedorSModel.belongsTo(TipoCSModel, { foreignKey: "TIPO_CEDULA" });





export { ProveedorSModel, Direccion_proveedorSModel, Telefono_proveedorSModel, TipoCSModel }