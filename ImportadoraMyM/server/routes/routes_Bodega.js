import express from 'express'
import { getAllCompras } from '../controllers/BodegasController.js'
const router = express.Router()

router.get('/', getAllCompras)


export default router




