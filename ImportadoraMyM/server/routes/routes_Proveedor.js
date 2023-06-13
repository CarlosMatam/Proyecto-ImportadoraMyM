
import express from 'express'
import { getAllProveedor, getProveedor, createProveedor, updateProveedor, deleteProveedor } from '../controllers/ProveedorController.js'
const router = express.Router()

router.get('/', getAllProveedor)
router.get('/:ID_PROVEEDOR', getProveedor)
router.post('/', createProveedor)
router.put('/:ID_PROVEEDOR', updateProveedor)
router.delete('/:ID_PROVEEDOR', deleteProveedor)

export default router

