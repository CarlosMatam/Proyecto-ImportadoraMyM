import Agente_ventaSModel from './Agente_venta.js';
import Direccion_agenteSModel from './Direccion_agente.js';
import  Telefono_agenteSModel from './Telefono_agente.js';
import ZonaSModel from './Zona.js';



Agente_ventaSModel.belongsTo(Direccion_agenteSModel, { foreignKey: "id_direccion" });
Agente_ventaSModel.belongsTo(Telefono_agenteSModel, { foreignKey: "id_telefono" });
Agente_ventaSModel.hasMany(ZonaSModel,{foreignKey: "id_zona"});



export { Agente_ventaSModel, Direccion_agenteSModel, Telefono_agenteSModel, ZonaSModel }


/*module.exports = {
    Agente_ventaSModel,
    Direccion_agenteSModel,
    Telefono_agenteSModel,
    ZonaSModel
}*/
