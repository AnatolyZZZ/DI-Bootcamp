import { Sequelize } from "sequelize";
import db from '../config/Database.js';

const {DataTypes} = Sequelize;

const Users = db.define ('users', {
    email : {
        type: DataTypes.STRING
    },
    password : {
        type: DataTypes.STRING
    },
    username : {
        type: DataTypes.STRING 
    }
    // cteatedAt: {
    //     type: DataTypes.DATE,
    //     field : 'createat'
    // }
},
{
    timestamps : false,
    freezeTableName: true,
    tableName: "users"
}
)

export default Users