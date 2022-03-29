import { Router } from 'express';
import { create, list, remove, update,get } from '../Controllers/product';
import { userById } from '../Controllers/user';
import { checkAuth, requiredSigin,isAuth,isAdmin} from '../Middlewares/checkAuth'

const router = Router();

router.get('/products',list);
router.post('/products',create);
router.get('/product/:id',get );
router.delete('/product/:id', remove);
router.put('/product/:id',  update);
router.param('userId', userById)
export default router;