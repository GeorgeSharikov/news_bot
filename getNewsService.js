import fetch from 'node-fetch'
import * as cheerio from 'cheerio'

export const getNews = async () => {
    const res = await fetch('https://yle.fi/uutiset/osasto/selkouutiset/')
    const html = await res.text()
    let $ = cheerio.load(html.toString())

    const articles = $('.custom').html()
    $ = cheerio.load(articles)

    const section = $('section').eq(1).html()
    $ = cheerio.load(section)

    const sectionTwo = $('.text').html()
    const count = $('div.text p').get().length

    $ = cheerio.load(sectionTwo)
    const data = {}
    let tmp
    let counter = 0
    const texts = $('h3').each((i, el) => {
        el = $(el)
        tmp = el.text().trim()
        data[tmp] = {text: [], img: null}
        el = el.next()
        while(  el && el.prop('tagName') !== 'H3'){
            if(el.prop('tagName') === 'P'){
                console.log('sss')
                counter= counter + 1
                if(Boolean(el.text().trim())){
                    data[tmp].text.push([el.text().trim()])
                }
            }
            if(el.prop('tagName') === 'FIGURE'){
                const link = el.find('a')
                data[tmp].img = link.attr('href')
            }
            console.log(counter === count, counter, count)
            el = counter === count-1 ? null : $(el.next())
        }
    })
    return JSON.stringify(data, null, 4)
}
