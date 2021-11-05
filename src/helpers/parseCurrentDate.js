import * as cheerio from "cheerio";

export const parseDate = (html) => {
    let $ = cheerio.load(html.toString())
    const date = $('header div.hgroup h1').eq(1).html()
    return date.split(' ').slice(0, date.split(' ').length - 1).join(' ')
}