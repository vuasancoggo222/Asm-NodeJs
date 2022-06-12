import {signin,signup} from '../Controllers/auth'
import { remove,get} from '../Controllers/user';
import {Router} from "express"
const router = Router();

router.post('/signup',signup);
router.post('/signin',signin);
router.delete('/users/:id',remove);
router.get('/users',get)
export default router;