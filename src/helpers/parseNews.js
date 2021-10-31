import * as cheerio from "cheerio";

export const parseNews = (html) => {
    let $ = cheerio.load(html.toString())

    const articles = $('.custom').html()
    $ = cheerio.load(articles)

    const section = $('section').eq(1).html()
    $ = cheerio.load(section)

    const sectionTwo = $('.text').html()
    const count = $('div.text p').get().length

    $ = cheerio.load(sectionTwo)
    const data = {news: {}}
    let tmp
    let counter = 0
    const texts = $('h3').each((i, el) => {
        el = $(el)
        tmp = el.text().trim()
        data.news[tmp] = {text: [], img: null}
        el = el.next()
        while(  el && el.prop('tagName') !== 'H3'){
            if(el.prop('tagName') === 'P'){
                counter= counter + 1
                if(Boolean(el.text().trim())){
                    data.news[tmp].text.push(el.text())
                }
            }
            if(el.prop('tagName') === 'FIGURE'){
                const link = el.find('a')
                data.news[tmp].img = link.attr('href')
            }
            el = counter === count ? null : $(el.next())
        }
    })
    return data
}