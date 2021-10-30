import {Markup} from "telegraf";

export const getMainMenu = () => {
    return Markup.keyboard([
        ['Get news', 'Translate']
    ]).resize()
}