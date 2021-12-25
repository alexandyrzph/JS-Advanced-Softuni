function solve (input) {

    let dataType = typeof input;
    if (dataType === 'number') {
        console.log(`${(Math.PI*input**2).toFixed(2)}`);
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${dataType}.`);
    }

}
solve(5);
solve('name');