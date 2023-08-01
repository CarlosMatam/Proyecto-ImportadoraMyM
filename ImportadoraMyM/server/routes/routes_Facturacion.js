import express from 'express'
import { crearFactura, obtenerUltimoIDFactura, getAllFacturas, deleteFactura, updateFactura, getFacturaById, obtenerDetalleFactura, actualizarDetalleFactura } from '../controllers/FacturacionController.js'
const router = express.Router()


router.post('/', crearFactura)
router.get('/ultimoID', obtenerUltimoIDFactura)
router.get('/', getAllFacturas)
router.delete('/:ID_FACTURA', deleteFactura)
router.put('/:ID_FACTURA', updateFactura)
router.get('/:ID_FACTURA', getFacturaById)
router.get('/:ID_FACTURA/detalle', obtenerDetalleFactura)
router.put('/:ID_FACTURA/detalle', actualizarDetalleFactura)


export default router
