import { Router } from 'express';
import { create, list, remove, update,get, getLatest,getOne, search, filter} from '../Controllers/product';
import { userById } from '../Controllers/user';
import { checkAuth, requiredSigin,isAuth,isAdmin} from '../Middlewares/checkAuth'

const router = Router();

router.get('/products',get);
router.post('/products/:userId',create);
router.get('/product/:id',getOne);
router.delete('/product/:id',remove);
router.put('/product/:id/:userId',update);
router.get('/products-latest',getLatest)
router.get('/products/search',search)
router.get('/products/filter',filter)
router.param('userId', userById)

export default router;