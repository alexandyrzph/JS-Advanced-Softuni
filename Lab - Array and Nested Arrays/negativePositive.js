function solve(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (Number(array[i]) < 0) {
            newArray.unshift(array[i]);
        } else {
            newArray.push(array[i]);
        }
    }
    console.log(newArray);
}
solve([7, -2, 8, 9]);