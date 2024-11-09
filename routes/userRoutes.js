import { Router } from "express";
import { getUsers, register, DeleteUser } from "../controllers/userController.js";


const router = Router();

router.get('/user', getUsers);
router.post('/createUser', register);
router.delete('/deleteUser',DeleteUser )

export default router;
