import express from 'express'
import { crearFactura } from '../controllers/FacturacionController.js'
const router = express.Router()


router.post('/', crearFactura)


export default router
