const daysOfWeek = ["Sunnuntai", "Monantai", "Tiistai", "keskiviikko", "Torstai", "Perjantai", "Lauantai"];
export const formatDate = (time) => {
    const date = new Date(time*1000)
    const arr = [];
    let day = date.getDay();
    day = daysOfWeek[day]
    arr.push(date.getDate());
    arr.push(date.getMonth() + 1);
    arr.push(date.getFullYear());
    return `${day} ${arr.join('.')}`
}