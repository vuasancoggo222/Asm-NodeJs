import {signin,signup} from '../Controllers/auth'
import { remove } from '../Controllers/user';
import {Router} from "express"
const router = Router();

router.post('/signup',signup);
router.post('/signin',signin);
router.delete('/users',remove);
export default router;