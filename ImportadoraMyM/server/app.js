import express from "express"
import cors from 'cors'
//importamos la conexión a la DB
import db from "./database/db.js"
//importamos nuestro enrutador
import AgenteRoutes from './routes/routes_Agente.js'
import ZonaRoutes from './routes/routes_Zona.js'
import ProveedorRoutes from './routes/routes_Proveedor.js'
import CobroRoutes from './routes/routes_Cobro.js'
import PagoRoutes from './routes/routes_Pago.js'
import DireccionAgenteRoutes from './routes/routes_DireccionAgente.js'
import TelefonoAgenteRoutes from './routes/routes_TelefonoAgente.js'
import TipoCedulaRoutes from './routes/routes_TipoCedula.js'
import DireccionProveedoresRoutes from './routes/routes_DireccionProveedor.js'
import TelefonoProveedoresRoutes from './routes/routes_TelefonoProveedor.js'
import TransporteRoutes from './routes/routes_Transporte.js'
import TelefonoTransporteRoutes from './routes/routes_TelefonoTransporte.js'
import ClienteRoutes from './routes/routes_Cliente.js'
import DireccionClienteRoutes from './routes/routes_DireccionCliente.js'
import TelefonoClienteRoutes from './routes/routes_TelefonoCliente.js'
import LoginRoutes from './routes/routes_Login.js'
import Facturacion from './routes/routes_Facturacion.js'
import CompaniaRoutes from './routes/routes_Compania.js'
import ProductoRoutes from './routes/routes_Producto.js'
import TipoClienteRoutes from './routes/routes_TipoCliente.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/Agentes', AgenteRoutes)
app.use('/Proveedores', ProveedorRoutes)
app.use('/Cobros',CobroRoutes)
app.use('/Pagos', PagoRoutes)
app.use('/Zonas', ZonaRoutes)
app.use('/DireccionesAgente', DireccionAgenteRoutes)
app.use('/TelefonosAgente', TelefonoAgenteRoutes)
app.use('/TipoCedula', TipoCedulaRoutes)
app.use('/DireccionesProvee', DireccionProveedoresRoutes)
app.use('/TelefonosProvee', TelefonoProveedoresRoutes)
app.use('/Transportes',TransporteRoutes)
app.use('/TelefonosTrans',TelefonoTransporteRoutes)
app.use('/Clientes',ClienteRoutes)
app.use('/DireccionesCliente',DireccionClienteRoutes)
app.use('/TelefonosCliente', TelefonoClienteRoutes)
app.use('/Login', LoginRoutes)
app.use('/Facturacion', Facturacion)
app.use('/Companias', CompaniaRoutes)
app.use('/Productos', ProductoRoutes)
app.use('/TiposCliente',TipoClienteRoutes)

try {
    await db.authenticate()
    console.log('Conexión exitosa a la DB')
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
}



app.listen(8000, () => {
    console.log('Server corriendo en http://localhost:8000/')
})