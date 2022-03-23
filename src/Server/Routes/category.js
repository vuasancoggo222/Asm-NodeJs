import {Router} from "express"
import {create,list} from "../Controllers/category"
const router = Router()


router.post('/categories',create)
router.get('/categories',list)
export default router