import { Router } from 'express';
import { create, remove, update,get, getLatest,getOne, search, filter} from '../Controllers/product';
import { userById } from '../Controllers/user';
import { requiredSigIn,isAuth,isAdmin} from '../Middlewares/checkAuth.js'

const router = Router();

router.get('/products',get);
router.post('/products/:userId',requiredSigIn,isAuth,isAdmin,create);
router.get('/product/:id',getOne);
router.delete('/product/:id/:userId',requiredSigIn,isAuth,isAdmin,remove);
router.put('/product/:id/:userId',requiredSigIn,isAuth,isAdmin,update);
router.get('/products-latest',getLatest)
router.get('/products/search',search)
router.get('/products/filter',filter)
router.param('userId', userById)
export default router;