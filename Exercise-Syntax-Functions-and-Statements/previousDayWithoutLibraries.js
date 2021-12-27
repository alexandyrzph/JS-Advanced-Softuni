function solve(year, month, day){
    day -= 1;
    if (day === 0){
        month -= 1;
        if (month === 4 || month === 6 || month === 9 || month === 11){
            day = 30;
        }
        else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
            day = 31;
        }
        else if (month === 2){
            if (year % 4 === 0){
                day = 29;
            }
            else{
                day = 28;
            }
        }
        if (month === 0){
            month = 12;
            year -= 1;
            day = 31;
        }
    }
    return `${year}-${month}-${day}`
}
console.log(solve(2016, 10, 1));
console.log(solve(2016, 9, 30));