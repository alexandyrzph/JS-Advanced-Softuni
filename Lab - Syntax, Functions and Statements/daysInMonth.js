function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
console.log(daysInMonth(1, 2012));
console.log(daysInMonth(2, 2021));
