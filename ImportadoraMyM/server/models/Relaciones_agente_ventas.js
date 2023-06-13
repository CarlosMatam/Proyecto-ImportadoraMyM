import Agente_ventaSModel from './Agente_venta.js';
import Direccion_agenteSModel from './Direccion_agente.js';
import  Telefono_agenteSModel from './Telefono_agente.js';
import ZonaSModel from './Zona.js';



Agente_ventaSModel.hasOne(Direccion_agenteSModel, { foreignKey: "ID_AGENTE", onDelete: 'CASCADE' });
Agente_ventaSModel.hasOne(Telefono_agenteSModel, { foreignKey: "ID_AGENTE", onDelete: 'CASCADE' });

Agente_ventaSModel.belongsTo(ZonaSModel, { foreignKey: "ID_ZONA" });





export { Agente_ventaSModel, Direccion_agenteSModel, Telefono_agenteSModel, ZonaSModel }


/*module.exports = {
    Agente_ventaSModel,
    Direccion_agenteSModel,
    Telefono_agenteSModel,
    ZonaSModel
}*/
