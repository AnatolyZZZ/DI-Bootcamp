import bcrypt from 'bcrypt';

import {newPlayer, changeLevel, newAdmin} from '../modules/Users.js'

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
        newuser['cur_level'] = 0;
    }
    try {
        const np =  isAdmin ?  await newAdmin(newuser) : await newPlayer(newuser)
        res.json({msg: "User registred"})
    } catch (error) {
        console.log(error);
        res.status(403).json({msg : "Email already exists"})
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

