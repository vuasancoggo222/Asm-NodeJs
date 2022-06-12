import {Router} from "express"
import {create,list,read,update} from "../Controllers/category"
const router = Router()


router.post('/categories',create)
router.get('/categories',list)
router.get('/category/:id',read)
router.put('/category/:id',update)
export default router