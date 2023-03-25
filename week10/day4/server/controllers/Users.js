import Users from "../models/UsersModel.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export const getUsers = async(req, res) => {
    try {
        const user = await Users.findAll({
            attributes: ["id", "email"]
        });
        res.json(user)
    } catch (error) {
        console.log(error);
        res.status(404).json({msg : 'not found'})
    }
}
// export const getNewToken = (req, res) => {

// }

export const login = async (req, res) => {
    try {
        const user = await Users.findAll({
            where : {
                username : req.body.username
            }
        })
        const match = await bcrypt.compare(req.body.password, user[0].password)
        if (!match) return res.status(400).json({msg : "wrong passord"})
        const userid = user[0].id;
        const email = user[0].email;

        const accessToken = jwt.sign({userid,email}, process.env.ACCESS_TOKEN, {expiresIn : "60s"});

        res.cookie('accessToken', accessToken, {
            httpOnly : true,
            maxAge: 60 * 1000
        })

        res.json({accessToken});

    } catch (error) {
        res.status(404).json({msg : "Username not found"})
    }
}

export const register = async (req, res) => {
    const {email, password} = req.body;
    console.log(email, password);
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt)
    try {
        await Users.create (
            {
                email : email,
                password :hashPassword,
                username : email
            }
        )
        res.json({msg: "User registred"})
    } catch (error) {
        console.log(error);
        res.status(403).json({msg:'Email already exists!'})
    }
}