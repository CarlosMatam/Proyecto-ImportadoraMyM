import express from 'express'
import { getAllAgente, getAgente, createAgente, updateAgente, deleteAgente } from '../controllers/Agente_ventaController.js'
const router = express.Router()

router.get('/', getAllAgente)
router.get('/:ID_AGENTE', getAgente)
router.post('/', createAgente)
router.put('/:ID_AGENTE', updateAgente)
router.delete('/:ID_AGENTE', deleteAgente)

export default router
