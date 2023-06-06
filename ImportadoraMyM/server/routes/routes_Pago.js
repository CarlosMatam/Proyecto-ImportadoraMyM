import express from 'express'
import { getAllPago, getPago, createPago, updatePago, deletePago } from '../controllers/PagoController.js'
const router = express.Router()

router.get('/', getAllPago)
router.get('/:ID_PAGO', getPago)
router.post('/', createPago)
router.put('/:ID_PAGO', updatePago)
router.delete('/:ID_PAGO', deletePago)

export default router
