import { Router } from 'express';
import { create, list, remove, update,get, getLatest,getOne, search} from '../Controllers/product';
import { userById } from '../Controllers/user';
import { checkAuth, requiredSigin,isAuth,isAdmin} from '../Middlewares/checkAuth'

const router = Router();

router.get('/products',get);
router.post('/products/:userId',requiredSigin,isAuth,isAdmin,create);
router.get('/product/:id',getOne);
router.delete('/product/:id/:userId',requiredSigin,isAuth,isAdmin,remove);
router.put('/product/:id/:userId',requiredSigin,isAuth,isAdmin,update);
router.get('/products-latest',getLatest)
router.get('/search',search)
router.get('/products/filter')
router.param('userId', userById)
export default router;