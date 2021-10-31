import fetch from 'node-fetch'
import {parseNews} from "../helpers/parseNews.js";
import {formatDate} from "../helpers/formateDate.js";

class NewsApi {
    getTodayNewsApi = async () => {
        try{
            const dataFetch = await fetch("https://player.api.yle.fi/v1/preview/1-50948804.json?language=fin&countryCode=RU&host=ylefi&isPortabilityRegion=false&ssl=true&app_id=player_static_prod&app_key=8930d72170e48303cf5f3867780d549b");
            const {data} = await dataFetch.json()
            // const formattedDate = formatDate(data?.ongoing_ondemand?.start_time)
            const formattedDate = data.ongoing_ondemand.next_episode.title.fin
            const res = await fetch('https://yle.fi/uutiset/osasto/selkouutiset/')
            const html = await res.text()
            const newsData = parseNews(html)
            newsData.date = formattedDate
            return newsData
        }catch (e) {
            console.log(e)
            throw new Error(e)
        }
    }
}

export const News = new NewsApi()