import {Router} from "express"
import {create,list,read} from "../Controllers/category"
const router = Router()


router.post('/categories',create)
router.get('/categories',list)
router.get('/category/:id',read)
export default router