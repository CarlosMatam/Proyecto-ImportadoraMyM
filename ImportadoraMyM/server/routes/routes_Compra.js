import express from 'express'
import { crearCompra, getAllCompras, deleteCompra, updateCompra, getCompraById, obtenerDetalleCompra, actualizarDetalleCompra } from '../controllers/CompraController.js'
const router = express.Router()


router.post('/', crearCompra)
router.get('/', getAllCompras)
router.delete('/:NUM_DOCUMENTO', deleteCompra)
router.put('/:NUM_DOCUMENTO', updateCompra)
router.get('/:NUM_DOCUMENTO', getCompraById)
router.get('/:NUM_DOCUMENTO/detalle', obtenerDetalleCompra)
router.put('/:NUM_DOCUMENTO/detalle', actualizarDetalleCompra)


export default router
