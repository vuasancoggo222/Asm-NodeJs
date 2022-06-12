import {Router} from "express"
import {create,list,read,update,remove} from "../Controllers/category"
const router = Router()


router.post('/categories',create)
router.get('/categories',list)
router.get('/category/:id',read)
router.put('/category/:id',update)
router.delete('/category/:id',remove)
export default router