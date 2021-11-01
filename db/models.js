import {sequalize} from "./db.js";
import pkg from 'sequelize';
const {DataTypes} = pkg;

export const NewsModel = sequalize.define('news',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.STRING},
    news: {type: DataTypes.JSON}
})