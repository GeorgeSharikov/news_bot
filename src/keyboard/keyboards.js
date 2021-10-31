import {Markup} from "telegraf";

export const getMainMenu = () => {
    return Markup.keyboard([
        ['Get News', 'Get Previous News']
    ]).resize().oneTime()
}