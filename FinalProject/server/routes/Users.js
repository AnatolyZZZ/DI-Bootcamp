import  {_newUser, _changeLevel, login} from '../controllers/Users.js'
import express from 'express'

export const user_router = express.Router();

user_router.post('/', _newUser);
user_router.put('/lvl', _changeLevel);
user_router.post('/login', login)

