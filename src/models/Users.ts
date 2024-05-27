import { DataTypes, Model } from "sequelize";

import { db } from '../database/postgres'


export interface UserInterface {
    id: number;
    name: string;
    code: string;
}

export class User extends Model<UserInterface> implements UserInterface {
    public id!: number;
    public name!: string;
    public code!: string;
}

User.init({
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: 'tb_users',
    timestamps: false
});
