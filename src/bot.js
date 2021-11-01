import env from 'dotenv'; env.config()
import pkg from 'telegraf';
const {Telegraf, Markup, Extra } = pkg;
import {NewsController} from "./Controllers/newsController.js";
import {getMainMenu} from "./keyboard/keyboards.js";
import {sequalize} from "../db/db.js";
import {NewsModel} from "../db/models.js";

await sequalize.authenticate()
await sequalize.sync()

const API = process.env.API_KEY

const bot = new Telegraf(API)
bot.start((ctx) => ctx.reply('Welcome!!! \nHere you can get some news in easy finnish', getMainMenu()))
bot.hears('Get News', async (ctx) => await NewsController.getTodayNews(ctx))

bot.launch()
