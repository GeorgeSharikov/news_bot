const daysOfWeek = ["Sunnuntai", "Monantai", "Tiistay", "keskiviikko", "Torstai", "Perjantai", "Lauantai"];
export const formatDate = (time) => {
    console.log(time)
    const ms = Date.parse(time);
    const date = new Date(ms)
    const arr = [];
    let day = date.getDay();
    day = daysOfWeek[day]
    arr.push(date.getDate());
    arr.push(date.getMonth() + 1);
    arr.push(date.getFullYear());
    return `${day} ${arr.join('.')}`
}