import express from 'express'
import { getAllCabys, getCabys, createCabys, updateCabys, deleteCabys } from '../controllers/CabysController.js'
const router = express.Router()

router.get('/', getAllCabys)
router.get('/:ID_CABYS_MYM', getCabys)
router.post('/', createCabys)
router.put('/:ID_CABYS_MYM', updateCabys)
router.delete('/:ID_CABYS_MYM', deleteCabys)

export default router
