import {Sequelize} from "sequelize";
import env from 'dotenv'
env.config()

export const sequalize = new Sequelize(process.env.DATABASE_URL,{
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: true
        }
    }
)