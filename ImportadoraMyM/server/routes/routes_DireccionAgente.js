import express from 'express'
import { getAllDireccion, getDireccion, createDireccion, updateDireccion, deleteDireccion } from '../controllers/Direccion_agenteController.js'
const router = express.Router()

router.get('/', getAllDireccion)
router.get('/:ID_DIRECCION', getDireccion)
router.post('/', createDireccion)
router.put('/:ID_DIRECCION', updateDireccion)
router.delete('/:ID_DIRECCION', deleteDireccion)

export default router
