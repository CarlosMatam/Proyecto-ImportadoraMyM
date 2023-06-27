import CompaniasSModel from './Compania.js';
import TipoFacturaSModel from './Tipo_factura.js';
import ClienteSModel from './Cliente.js';
import FacturacionSModel from './Facturacion.js' 
import DetalleFacturaSModel from './Detalle_factura.js'




FacturacionSModel.belongsTo(CompaniasSModel, { foreignKey: "ID_COMPANIA"});
FacturacionSModel.belongsTo(TipoFacturaSModel, { foreignKey: "ID_TIPO_FACTURA"});
FacturacionSModel.belongsTo(ClienteSModel, { foreignKey: "ID_CLIENTE" });
FacturacionSModel.hasMany(DetalleFacturaSModel, { foreignKey: 'ID_FACTURA' });


export { CompaniasSModel, TipoFacturaSModel, ClienteSModel, FacturacionSModel, DetalleFacturaSModel }

