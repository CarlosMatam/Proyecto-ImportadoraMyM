import express from 'express'
import {ValidacionLogin } from '../controllers/LoginController.js'
const router = express.Router()

/*router.get('/', getAllAgente)
router.get('/:ID_AGENTE', getAgente)
router.post('/', createAgente)
router.put('/:ID_AGENTE', updateAgente)
router.delete('/:ID_AGENTE', deleteAgente)
*/

router.post('/', ValidacionLogin)
export default router
