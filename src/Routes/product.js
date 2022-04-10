import { Router } from 'express';
import { create, list, remove, update,get, getLatest,getOne, search} from '../Controllers/product';
import { userById } from '../Controllers/user';
import { checkAuth, requiredSigin,isAuth,isAdmin} from '../Middlewares/checkAuth'
import { upload } from '../Middlewares/upload';
const router = Router();

router.get('/products',get);
router.post('/products/:userId',requiredSigin,isAuth,isAdmin,upload.single('image'),create);
router.get('/product/:id',getOne);
router.delete('/product/:id/:userId',requiredSigin,isAuth,isAdmin,remove);
router.put('/product/:id/:userId',requiredSigin,isAuth,isAdmin,upload.single('image'),update);
router.get('/products-latest',getLatest)
router.get('/products/search',search)
router.get('/products/filter')
router.param('userId', userById)m

export default router;