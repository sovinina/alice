import {Router} from 'express'
const router = Router()
import cluesController from "../controllers/clueController.js";
router.get('/',  cluesController.getAll)
router.post('/',  cluesController.create)
export default router