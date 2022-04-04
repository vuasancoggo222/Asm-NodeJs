import { Router } from 'express';
import { create, list, remove, update,get, getLatest } from '../Controllers/product';
import { userById } from '../Controllers/user';
import { checkAuth, requiredSigin,isAuth,isAdmin} from '../Middlewares/checkAuth'

const router = Router();

router.get('/products/:userId',requiredSigin,isAuth,isAdmin,list);
router.post('/products/:userId',requiredSigin,isAuth,isAdmin,create);
router.get('/product/:id',get );
router.delete('/product/:id/:userId',requiredSigin,isAuth,isAdmin,remove);
router.put('/product/:id/:userId',requiredSigin,isAuth,isAdmin,update);
router.get('/products-latest/limit=:limit',getLatest)
router.param('userId', userById)
export default router;