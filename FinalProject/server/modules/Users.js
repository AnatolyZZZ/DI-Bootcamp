import {db} from '../config/db.js';

export const newPlayer = async (player) => {
    return db('players')
    .insert(player)
    .returning('*')
}

export const newAdmin = async (admin) => {
    return db('admins')
    .insert(admin)
    .returning('*')
}

export const changeLevel = async (id, new_level) => {
    return db('players')
    .where({'id' : id })
    .update({'cur_level' : new_level})
    .returning('*')
}

