import express from 'express'
import { getAllZona, getZona, createZona, updateZona, deleteZona } from '../controllers/ZonaController.js'
const router = express.Router()

router.get('/', getAllZona)
router.get('/:ID_ZONA', getZona)
router.post('/', createZona)
router.put('/:ID_ZONA', updateZona)
router.delete('/:ID_ZONA', deleteZona)

export default router
