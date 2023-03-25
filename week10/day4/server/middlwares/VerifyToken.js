import jwt from "jsonwebtoken";
import Users from "../models/UsersModel.js";
import dotenv from "dotenv"

dotenv.config()

export const VeryfyToken = (req, res, next) => {
    const accessToken = req.cookies.accessToken ||
                        req.headers['x-access-token']
    if(!accessToken) return  res.status(401).json({msg : "denied"});

    jwt.verify(accessToken, process.env.ACCESS_TOKEN, async (err, decoded) => {
        if (err) {
            console.log(err);
            return res.status(403).json({msg: "invalid"})
        }
        try {
            const user = await Users.findAll({
                where : {
                    email : decoded.email
                }
            })
            // console.log(user)
            // user.length === 0 ? res.status(403).json({msg : "var failed"}) :
            const userid = user[0].id;
            const email = user[0].email;
            const accessToken = jwt.sign({userid,email}, process.env.ACCESS_TOKEN, {expiresIn : "60s"});
            res.cookie('accessToken', accessToken, {
                httpOnly : true,
                maxAge: 60 * 1000
            })
            next()
        } catch (e) {
            res.status(403).json({msg : "var failed"})
        }
        
    })
}