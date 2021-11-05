import fetch from 'node-fetch'
import {parseNews} from "../helpers/parseNews.js";
import {formatDate} from "../helpers/formateDate.js";
import {NewsModel} from "../../db/models.js";
import {parseDate} from "../helpers/parseCurrentDate.js";

class NewsApi {
    getTodayNewsApi = async () => {
        try{
            const res = await fetch('https://yle.fi/uutiset/osasto/selkouutiset/')
            const html = await res.text()
            const formattedDate = parseDate(html)
            const news = await NewsModel.findOne({where: {date: formattedDate}})
            if(news) {
                const {date, news: newsText} = news
                return {date, news: newsText}
            }
            const newsData = parseNews(html)
            newsData.date = formattedDate
            return await NewsModel.create(newsData)
        }catch (e) {
            console.log(e)
            throw new Error(e)
        }
    }
    getLastSevenNews = async () => {
        const news = await NewsModel.findAll()
        return news.slice(news.length > 7 ? news.length - 7 : 0)
    }
}

export const News = new NewsApi()