function solve(array) {
    let newArr = [];
    array.filter((el, idx) => {
        if (idx % 2 == 1) {
            newArr.push(el * 2);
        }
    });
    return newArr.reverse().join(' ');

}
console.log(solve([10, 15, 20, 25]));