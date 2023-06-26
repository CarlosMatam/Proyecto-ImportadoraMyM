import express from 'express'
import { getAllProducto, getProducto, createProducto, updateProducto, deleteProducto } from '../controllers/ProductoController.js'
const router = express.Router()

router.get('/', getAllProducto)
router.get('/:ID_PRODUCTO', getProducto)
router.post('/', createProducto)
router.put('/:ID_PRODUCTO', updateProducto)
router.delete('/:ID_PRODUCTO', deleteProducto)

export default router
