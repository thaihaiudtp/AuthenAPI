import express from 'express';
const router = express.Router();
import UserController from '../app/controller/userController.js';

router.post('/register', UserController.Register);
router.post('/login', UserController.Login)
router.post('/forget', UserController.forgetPassword)
router.post('/change', UserController.changePassword)
export default router;