function solve(input) {
    // parsing the input;
    let houses = input.shift().split('@').map(Number);
    let index = 0;
    for (let command of input) {
        if (command == 'Love!') {
            break;
        }
        let jumpLength = command.split(' ').map(Number)[1];
        index += jumpLength;

        if (index >= houses.length) {
            index = 0;
        }
        if (houses[index] == 0) {
            console.log(`Place ${index} already had Valentine's day.`);
        } else {
            houses[index] -= 2;
            if (houses[index] == 0) {
                console.log(`Place ${index} has Valentine's day.`);
            }
        }
    }

    //parsing the end;
    console.log(`Cupid's last position was ${index}.`);
    let missed = houses.filter((x) => x > 0).length;
    if (missed == 0) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${missed} places.`);
    }
}
solve(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!']);
console.log(`----------`);
solve([
    '2@4@2', 'Jump 2',
    'Jump 2', 'Jump 8',
    'Jump 3', 'Jump 1',
    'Love!'
]);