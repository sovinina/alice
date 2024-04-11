import {Router} from 'express'
import peopleRouter from './peopleRouter.js'
import clueRouter from './clueRouter.js'
import motivesRouter from './motivesRouter.js'


const router = Router()

router.use('/people', peopleRouter)
router.use('/clue', clueRouter)
router.use('/motives', motivesRouter)
export default router