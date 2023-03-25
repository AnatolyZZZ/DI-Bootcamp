import express from 'express';
import {register, login, getUsers} from '../controllers/Users.js';
import { VeryfyToken } from '../middlwares/VerifyToken.js';


const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users', VeryfyToken,getUsers);
router.get('/token', VeryfyToken, (req, res) => {
    res.status(200).json({msg: "ok"})
} )
// const accessToken = req.cookies.accessToken ||
                        // req.headers['x-access-token']
// router.get('/token', VeryfyToken, (req, res) => {
//     res.status(200).json({accessToken})
// } )

export default router