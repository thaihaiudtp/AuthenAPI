import express from 'express';
const router = express.Router();
import UserController from '../app/controller/userController.js';
//http://localhost:3000/user/api/register
/*
    {
        "name": "",
        "email": "",
        "password": "",
    }
*/
router.post('/register', UserController.Register)

//http://localhost:3000/user/api/login  (trả về accessToken)
/*
    {
        "email": "",
        "password": "",
    }
*/
router.post('/login', UserController.Login)

//http://localhost:3000/user/api/forget (trả về resetToken)
/*
    {
        "email": ""
    }
*/
router.post('/forget', UserController.forgetPassword)

//http://localhost:3000/user/api/change
/*
    {
        "password": "",
        "resetToken": ""
    }
*/
router.post('/change', UserController.changePassword)
export default router;