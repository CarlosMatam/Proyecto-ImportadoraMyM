import express from 'express'
import { getAllTelefono, getTelefono, createTelefono, updateTelefono, deleteTelefono } from '../controllers/Telefono_proveedorController.js'
const router = express.Router()

router.get('/', getAllTelefono)
router.get('/:ID_TELEFONO', getTelefono)
router.post('/', createTelefono)
router.put('/:ID_TELEFONO', updateTelefono)
router.delete('/:ID_TELEFONO', deleteTelefono)

export default router
