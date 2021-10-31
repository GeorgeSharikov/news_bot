import {getMainMenu} from "./keyboard/keyboards.js";
import pkg from 'telegraf';
import {NewsController} from "./Controllers/newsController.js";
const {Telegraf, Markup, Extra } = pkg;


const API = '2060081291:AAEoWdvRxr9yqFjN6XRHEvGebO3aERITdu0'

const bot = new Telegraf(API)
bot.start((ctx) => ctx.reply('Welcome!!! \nHere you can get some news in easy finnish', getMainMenu()))
bot.hears('Get News', async (ctx) => await NewsController.getTodayNews(ctx))

bot.launch()
