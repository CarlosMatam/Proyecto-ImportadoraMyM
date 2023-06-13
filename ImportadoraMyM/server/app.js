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


const app = express()

app.use(cors())
app.use(express.json())
app.use('/Agentes', AgenteRoutes)
app.use('/Proveedores', ProveedorRoutes)
app.use('/Cobros',CobroRoutes)
app.use('/Pagos', PagoRoutes)
app.use('/Zonas', ZonaRoutes)
app.use('/Direcciones', DireccionAgenteRoutes)
app.use('/Telefonos', TelefonoAgenteRoutes)


try {
    await db.authenticate()
    console.log('Conexión exitosa a la DB')
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
}



app.listen(8000, () => {
    console.log('Server corriendo en http://localhost:8000/')
})