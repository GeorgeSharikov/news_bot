import env from 'dotenv'; env.config()
import pkg from 'telegraf';
const {Telegraf, Markup, Extra } = pkg;
import {NewsController} from "./Controllers/newsController.js";
import {getMainMenu} from "./keyboard/keyboards.js";
import {sequalize} from "../db/db.js";
import {NewsModel} from "../db/models.js";
import express from 'express'

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
bot.hears('Get News', async (ctx) => await NewsController.getTodayNews(ctx))
bot.launch()
