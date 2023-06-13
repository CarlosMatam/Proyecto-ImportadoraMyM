/*A utilizar para la logica de las relaciones una vez se tengan las tablas relacionadas */



import ClienteSModel from '../models/Cliente.js';
import CobroSModel from '../models/Cobro.js';




CobroSModel.belongsTo(ClienteSModel, { foreignKey: "ID_CLIENTE" });






export { ClienteSModel, CobroSModel}


