function previousDay(year, month, day) {
    let today = new Date(year, month - 1, day);
    let yesterday = new Date(year, month - 1, day);
    yesterday.setDate(today.getDate() - 1);
    return `${yesterday.getFullYear()}-${yesterday.getMonth()+1}-${yesterday.getDate()}`;
}
console.log(previousDay(2016, 10, 1));
console.log(previousDay(2016, 9, 30));