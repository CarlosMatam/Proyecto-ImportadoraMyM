import express from 'express'
import { getAllCobro, getCobro, createCobro, updateCobro, deleteCobro } from '../controllers/CobroController.js'
const router = express.Router()

router.get('/', getAllCobro)
router.get('/:ID_COBRO', getCobro)
router.post('/', createCobro)
router.put('/:ID_COBRO', updateCobro)
router.delete('/:ID_COBRO', deleteCobro)

export default router
