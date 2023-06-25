import express from 'express'
import { getAllCliente, getCliente, createCliente, updateCliente, deleteCliente } from '../controllers/ClienteController.js'
const router = express.Router()

router.get('/', getAllCliente)
router.get('/:ID_CLIENTE', getCliente)
router.post('/', createCliente)
router.put('/:ID_CLIENTE', updateCliente)
router.delete('/:ID_CLIENTE', deleteCliente)

export default router
