function solve(input) {

    let students = Number(input.shift());
    let lectures = Number(input.shift());
    let bonus = Number(input.shift());
    let totalBonus = 0;

    let newArray = [];
    let lecturesArray = [];
    for (let i = 0; i < students; i++) {
        let attedance = Number(input[i]);
        
        totalBonus = attedance / lectures * (5 + bonus);
        if(newArray.includes(totalBonus)) {
            continue;
        } else {
            lecturesArray.push(attedance);
            newArray.push(totalBonus);
        }
    }   
    let maxBonusScore = 0;
    let maxLectures = 0;
    
    for (let el of lecturesArray) {
        if (el > maxLectures) {
            maxLectures = el;
        }
    }
    for (let el of newArray) {
        if (el > maxBonusScore) {
            maxBonusScore = el
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonusScore)}.`);
    console.log(`The student has attended ${Math.ceil(maxLectures)} lectures.`);

}
solve([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]);
solve([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]);