import { Sequelize } from "sequelize";
const dotenv = require('dotenv');
import chalk from 'chalk';



dotenv.config();

export const db = new Sequelize(
    process.env.DB_NAME || '', 
    process.env.DB_USER || '',
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        port: parseInt(process.env.DB_HOST || '5432'),
        host: process.env.DB_HOST,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
);

export const connectDB = async () => {
    try {
        await db.authenticate();
        console.log(chalk.green('✅ Conexão ao banco de dados estabelecida com sucesso! ✅'));
    } catch (error) {
        console.log(chalk.red('❌ Erro de conexão ❌'));
        console.log(chalk.red("Error: ", error));
    }
}
