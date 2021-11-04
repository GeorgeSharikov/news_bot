import {Sequelize} from "sequelize";
import env from 'dotenv'
env.config()
//postgres://upqbvbddnugjyw:bb4c78cafc056a81825191266fc6e38af011e58177a9d9c3774f3cef6efb6cb5@ec2-176-34-168-83.eu-west-1.compute.amazonaws.com:5432/dbkkt8n24kn6la
//process.env.DATABASE_URL
const url = process.env.DATABASE_UR || "postgres://upqbvbddnugjyw:bb4c78cafc056a81825191266fc6e38af011e58177a9d9c3774f3cef6efb6cb5@ec2-176-34-168-83.eu-west-1.compute.amazonaws.com:5432/dbkkt8n24kn6la"
export const sequalize = new Sequelize(url,{
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false // <<<<<<< YOU NEED THIS
            }
        },
    }
)