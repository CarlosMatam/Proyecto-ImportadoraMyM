import express from 'express'
import { getAllTipo, getTipo, createTipo, updateTipo, deleteTipo } from '../controllers/TipoCedulaController.js'
const router = express.Router()

router.get('/', getAllTipo)
router.get('/:ID_TIPO_CEDULA', getTipo)
router.post('/', createTipo)
router.put('/:ID_TIPO_CEDULA', updateTipo)
router.delete('/:ID_TIPO_CEDULA', deleteTipo)

export default router

