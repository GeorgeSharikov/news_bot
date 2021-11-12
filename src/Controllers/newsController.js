import {News} from "../api/newsApi.js";
import {NewsModel} from "../../db/models.js";
import {getPreviousNewsInlineMenu} from "../keyboard/keyboards.js";
import { sendNews } from "../helpers/sendNews.js";

class NewsControllerClass {
    getTodayNews = async (ctx) => {
        try{
            const {news, date} = await News.getTodayNewsApi()
            sendNews(news, date, ctx)
        }catch (e) {
            console.log(e)
            await ctx.reply('Ooops, something went wrong')
        }
    }
    getPreviousNews = async (ctx) => {
        const news = await News.getLastSevenNews()
        ctx.reply('Please, choose news',getPreviousNewsInlineMenu(news))
    }
    getOnePreviousNew = async (ctx, date) => {
        const {date:newsDate, news} = await News.getPreviousOne(date)
        sendNews(news, newsDate, ctx)
    }
}

export const NewsController = new NewsControllerClass()