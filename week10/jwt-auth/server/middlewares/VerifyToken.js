import jwt from 'jsonwebtoken';
import Users from '../models/UsersModel.js';
import dotenv from 'dotenv'

dotenv.config()

export const VerifyToken = (req, res, next) => {


  const accessToken = req.cookies.accessToken ||
                      req.headers['x-access-token']

  if(!accessToken) return res.status(401).json({msg:'permision denied!'});

  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, async (err,decoded)=>{

    if(err) return res.status(403).json({msg:'verify token faild!'})

    req.email = decoded.email;
    req.userid = decoded.userid;
    
    console.log(req);

    try{
      const user = await Users.findAll({
        where:{
          email: decoded.email
        }
      })
      user.length === 0 ? res.status(403).json({msg:'verify user failed!'}) : next()
    }
    catch(e){
      res.status(403).json({msg:'verify user failed!'})
    }
  })
}
