import { DataTypes, Model } from "sequelize";

import { db } from '../database/postgres'


export interface PointSystemInterface {
    id?: number;
    user_id?: number;
    date?: string;
    begin?: string;
    end?: string;
    hours?: string;
}

export class PointSystem extends Model<PointSystemInterface> implements PointSystemInterface {
    public id!: number;
    public user_id!: number;
    public date!: string;
    public begin!: string;
    public end!: string;
    public hours!: string;
}

PointSystem.init({
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    begin: {
        type: DataTypes.STRING,
        allowNull: false
    },
    end: {
        type: DataTypes.STRING
    },
    hours: {
        type: DataTypes.STRING
    }
}, {
    sequelize: db,
    tableName: 'tb_point_system',
    timestamps: false
});
