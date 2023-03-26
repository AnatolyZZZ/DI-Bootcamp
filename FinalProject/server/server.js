import express  from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import {user_router} from './routes/Users.js';
import { level_router } from './routes/Levels.js';

dotenv.config();

const server = express();
server.use(cors());
server.use(express.urlencoded({extended:true}));
server.use(express.json())

server.listen(process.env.PORT, ()=>{
    console.log(`run on port ${process.env.PORT}`);
  })

server.use('/api/users', user_router);
server.use('/api/levels', level_router);