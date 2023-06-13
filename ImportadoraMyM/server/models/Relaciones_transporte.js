import TransporteSModel from "./Transporte.js";
import Telefono_transporteSModel from "./Telefono_transporte.js";

TransporteSModel.hasOne(Telefono_transporteSModel,{foreignKey:"ID_TRANSPORTE"})



export{TransporteSModel,Telefono_transporteSModel}