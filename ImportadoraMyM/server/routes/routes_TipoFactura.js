import express from 'express'
import { getAllTipo} from '../controllers/TipoFacturaController.js'
const router = express.Router()

router.get('/', getAllTipo)


export default router

