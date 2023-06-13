import express from 'express'
import { getAllTransporte, getransporte, createransporte, updateransporte, deleteransporte } from '../controllers/ransporteController.js'
const router = express.Router()

router.get('/', getAllransporte)
router.get('/:ID_TRANSPORTE', getransporte)
router.post('/', createransporte)
router.put('/:ID_TRANSPORTE', updateransporte)
router.delete('/:ID_TRANSPORTE', deleteransporte)

export default router