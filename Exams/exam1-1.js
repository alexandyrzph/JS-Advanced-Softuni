function solve(input) {

    let emp1 = Number(input.shift());
    let emp2 = Number(input.shift());
    let emp3 = Number(input.shift());
    let peopleCount = Number(input.shift());
    let totalWorkPerHour = emp1 + emp2 + emp3;
    let hours = 0;
    while (peopleCount > 0) {
        hours++;
        if (hours % 4 == 0) {
            continue;
        } else {
            peopleCount -= totalWorkPerHour;
        }
    }
    console.log(`Time needed: ${hours}h.`);
}
solve(['5', '6', '4', '20']);
solve(['1', '2', '3', '45']);
solve(['3', '2', '5', '40']);