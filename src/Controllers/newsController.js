import {News} from "../api/newsApi.js";

class NewsControllerClass {
    getTodayNews = async (ctx) => {
        try{
            const {news, date} = await News.getTodayNewsApi()
            const keys = Object.keys(news)
            await ctx.replyWithHTML(`<b><strong>${date}</strong></b>`)
            for(let i = 0; i<keys.length; i++) {
                const key = keys[i]
                let url = !news[key].img && key === 'Sää'
                    ? 'https://gorod-novoross.ru/news_foto/full/l2y_45k7e0mgdpix3oa19nwqz6rbf-.jpg' //Weather image
                    : news[key].img || 'https://image.flaticon.com/icons/png/512/179/179452.png'
                const str = news[key].text.join('\n\n\t')
                await ctx.replyWithPhoto(url, {disable_notification: true})
                await ctx.replyWithHTML(`<b><u><strong>${key}</strong></u></b>\n\n<b>\t${str}</b>`, {disable_notification: true})
            }
        }catch (e) {
            console.log(e)
            await ctx.reply('Ooops, something went wrong')
        }
    }
}

export const NewsController = new NewsControllerClass()