import express from 'express'
import { getAllCompania, getCompania, createCompania, updateCompania, deleteCompania } from '../controllers/CompaniaController.js'
const router = express.Router()

router.get('/', getAllCompania)
router.get('/:ID_COMPANIA', getCompania)
router.post('/', createCompania)
router.put('/:ID_COMPANIA', updateCompania)
router.delete('/:ID_COMPANIA', deleteCompania)

export default router