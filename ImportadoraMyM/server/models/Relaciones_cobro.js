import ClienteSModel from '../models/Cliente.js';
import CobroSModel from '../models/Cobro.js';

ClienteSModel.hasMany(CobroSModel, { foreignKey: "ID_CLIENTE" })
CobroSModel.belongsTo(ClienteSModel, { foreignKey: "ID_CLIENTE" }); //Se puede quitar este, hay que ver si corre primero con las dos

export { ClienteSModel, CobroSModel}