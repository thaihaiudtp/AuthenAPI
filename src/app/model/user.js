import { DataTypes } from 'sequelize';
import sequelize from '../../config/db/dbConnect.js';
import bcrypt from "bcrypt";
const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        passwordResetToken: {
            type: DataTypes.STRING,
        },
        passwordResetExpires: {
            type: DataTypes.DATE,
        }
    },
    {
        timestamps: true,
    }
);

//hook để hash password
User.beforeCreate(async(user, options) => {
    if(!user.password){
        throw new Error('Password is required');
    }
    const saltRound = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, saltRound);
    
});

export default User;