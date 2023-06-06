import express from "express"
import cors from 'cors'
//importamos la conexión a la DB
import db from "./database/db.js"
//importamos nuestro enrutador
import AgenteRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/Agentes', AgenteRoutes)

try {
    await db.authenticate()
    console.log('Conexión exitosa a la DB')
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
}



app.listen(8000, () => {
    console.log('Server corriendo en http://localhost:8000/')
})