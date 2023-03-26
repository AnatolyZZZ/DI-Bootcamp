import express from 'express';
import {register, login, getUsers} from '../controllers/Users.js';
import {VerifyToken} from '../middlewares/VerifyToken.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/register',register);
router.post('/login',login);
router.get('/users', VerifyToken, getUsers);

router.get('/token', VerifyToken, (req,res)=>{

  const userid = req.userid;
  const email = req.email;

  const accessToken = jwt.sign({userid,email},process.env.ACCESS_TOKEN_SECRET, {
    expiresIn:'60s'
  })

  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    maxAge: 60 * 1000
  })

  res.status(200).json({accessToken})
})

export default router;
