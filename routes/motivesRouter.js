import {Router} from 'express'
import motivesController from "../controllers/motivesController.js";
const router = Router()

router.get('/',  motivesController.getAll)
router.post('/',  motivesController.create)
export default router
