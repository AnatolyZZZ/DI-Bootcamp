import  {_newUser, _changeLevel, login, getToken} from '../controllers/Users.js'
import express from 'express'
import { VerifyToken } from '../middlwares/VerifyToken.js';

export const user_router = express.Router();

user_router.post('/', _newUser);
user_router.put('/lvl', _changeLevel);
user_router.post('/login', login);
user_router.get('/token', VerifyToken, getToken)

