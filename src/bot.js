import env from 'dotenv'; env.config()
import pkg from 'telegraf';
const {Telegraf } = pkg;
import {NewsController} from "./Controllers/newsController.js";
import {getMainMenu} from "./keyboard/keyboards.js";
import {sequalize} from "../db/db.js";
import {NewsModel} from "../db/models.js";
import express from 'express'
import fetch from 'node-fetch';

//server
const port = process.env.PORT || 3000
const app = express()

app.get('/', (req, res) => res.send('Hello world!!!'))
app.listen(port, () => console.log('listen'))
// db
await sequalize.authenticate()
await sequalize.sync()
//bot
const API = process.env.API_KEY

const bot = new Telegraf(API)
bot.start((ctx) => ctx.reply('Welcome!!! \nHere you can get some news in easy finnish', getMainMenu()))
bot.hears('Get News', (ctx) => NewsController.getTodayNews(ctx))
bot.hears('Get Previous News', (ctx) => NewsController.getPreviousNews(ctx))
bot.launch()


setInterval(async () => {
    fetch('https://finnish-news-bot.herokuapp.com/')
}, 60*30)