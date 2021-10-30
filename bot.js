import {getNews} from './getNewsService.js'
import {getMainMenu} from "./keyboards.js";
import {Telegraf} from "telegraf";

const API = '2060081291:AAEoWdvRxr9yqFjN6XRHEvGebO3aERITdu0'

const bot = new Telegraf(API)
bot.start((ctx) => ctx.reply('Welcome'))
getMainMenu()
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('message', (ctx) => ctx.replyWithPhoto('https://img.yle.fi/uutiset/uutisen-ims-kuvat/article12167348.ece/ALTERNATES/w580/39-873690617bf0b8b1c5d'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.launch()
