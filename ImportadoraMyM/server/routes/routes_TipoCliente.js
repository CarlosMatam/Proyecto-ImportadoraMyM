

import express from 'express'
import { getAllTipo, getTipo, createTipo, updateTipo, deleteTipo } from '../controllers/Tipo_clienteController.js'
const router = express.Router()

router.get('/', getAllTipo)
router.get('/:ID_TIPO_CLIENTE', getTipo)
router.post('/', createTipo)
router.put('/:ID_TIPO_CLIENTE', updateTipo)
router.delete('/:ID_TIPO_CLIENTE', deleteTipo)

export default router

