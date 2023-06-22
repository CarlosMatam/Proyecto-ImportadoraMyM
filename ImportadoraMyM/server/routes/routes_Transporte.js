import express from 'express'
import { getAllTransporte, getTransporte, createTransporte, updateTransporte, deleteTransporte } from '../controllers/TransporteController.js'
const router = express.Router()

router.get('/', getAllTransporte)
router.get('/:ID_TRANSPORTE', getTransporte)
router.post('/', createTransporte)
router.put('/:ID_TRANSPORTE', updateTransporte)
router.delete('/:ID_TRANSPORTE', deleteTransporte)

export default router