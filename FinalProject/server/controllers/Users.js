import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import {getAllLevels} from '../modules/Levels.js'


dotenv.config();

import {newPlayer, changeLevel, newAdmin, getAdmin, getPlayer} from '../modules/Users.js'

export const _newUser = async (req, res) => {
    const {email, password, isAdmin} = req.body;
    // console.log(email, password);
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newuser = {
        email : email,
        password : hashPassword,
    }
    if (!isAdmin) {
        const minLevel = await getAllLevels()[0]
        newuser['cur_level'] = minLevel;
    }
    try {
        const np =  isAdmin ?  await newAdmin(newuser) : await newPlayer(newuser)
        res.json({msg: "User registred"})
    } catch (error) {
        console.log(error);
        res.status(403).json({msg : "Email already exists"})
    }
}

export const login = async (req, res) => {
    const {email, password, isAdmin} = req.body;
    try {
        const user = isAdmin ? await getAdmin(email) : await getPlayer(email);
        if (user.length === 0) {
            res.status(403).json({msg : "No such email"})
        }
        const match = await bcrypt.compare(req.body.password, user[0].password);
            if (!match) return res.status(400).json({msg: "Invalid password"})
        console.log(user)
        const userid = user[0].id;
        const accessToken = jwt.sign({userid, email, isAdmin}, process.env.ACCESS_TOKEN_SECRET, {expiresIn : '600s'})

        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            maxAge: 600 * 1000
          })

        res.json({accessToken});

    } catch (error) {
        console.log(error);
        res.status(500).json({msg : "Internal error"})
    }
}

export const _changeLevel = async (req, res) => {
    const {id, new_level} = req.body;
    try {
        const lvl = await changeLevel(id, new_level);
        console.log(lvl)
        lvl.length === 0 ? res.status(403).json({msg : "Levelup failed"}) : res.json({msg: "Level updated"})
    } catch (error) {
        console.log(error);
        res.status(403).json({msg : "Levelup failed"})
    }
}

export const getToken = async (req, res) => {
    const {userid, isAdmin, email} = req.body;
    const accessToken = jwt.sign({userid, email, isAdmin}, process.env.ACCESS_TOKEN_SECRET, {expiresIn : '600s'})
    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        maxAge: 600 * 1000
    })
    res.status(200).json({accessToken})
}



