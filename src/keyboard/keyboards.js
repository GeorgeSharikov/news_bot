import {Markup} from "telegraf";

export const getMainMenu = () => {
    return Markup.keyboard([
        ['Get News', 'Get Previous News']
    ]).resize().oneTime()
}

export const getPreviousNewsInlineMenu = (news) => {
    return Markup.inlineKeyboard(news.map(el => {
        const date = el.date.toString()
        return [Markup.button.callback(date, date)]
    }))
}