function solve(input) {

    let efficiency1 = Number(input[0]);
    let efficiency2 = Number(input[1]);
    let efficiency3 = Number(input[2]);
    let people = Number(input[3]);
    let totalEfficiency = efficiency1 + efficiency2 + efficiency3;
    let hours = 0;
    let totalWork = 0;
    while (totalWork < people) {
        hours++;
        if (hours % 4 == 0) {
            continue;
        } else {
            totalWork += totalEfficiency;
        }
        if (totalWork == people) {
            break;
        }
    }
    console.log(`Time needed: ${hours}h.`);
}
solve([5, 6, 4, 20]);
solve([1, 2, 3, 45]);
solve([3, 2, 5, 40]);