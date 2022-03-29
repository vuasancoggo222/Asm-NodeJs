import {signin,signup} from '../Controllers/auth'
import {Router} from "express"
const router = Router();

router.post('/signup',signup);
router.post('/signin',signin);

export default router;