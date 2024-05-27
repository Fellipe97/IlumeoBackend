import { DataTypes, Model } from "sequelize";

import { db } from '../database/postgres'


export interface PointSystemInterface {
    id: number;
    user_id: number;
    begin: Date;
    end: Date;
    hours: string;
}

export class PointSystem extends Model<PointSystemInterface> implements PointSystemInterface {
    public id!: number;
    public user_id!: number;
    public begin!: Date;
    public end!: Date;
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
    begin: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hours: {
        type: DataTypes.STRING,
        allowNull: false 
    }
}, {
    sequelize: db,
    tableName: 'tb_point_system',
    timestamps: false
});
