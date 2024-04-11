import {Router} from 'express'
import peopleController from "../controllers/peopleController.js";
const router = Router()


router.get('/',  peopleController.getAll)
router.post('/',  peopleController.create)
router.delete('/',  peopleController.delete)
router.patch('/',  peopleController.patch)

export default router