function solve(array) {
    let minNum = Math.min(...array);
    let newArr = [];
    let index = array.indexOf(minNum);
    let removed = array.splice(index, 1);
    newArr.push(...removed);
    let minNum2 = Math.min(...array);
    let index2 = array.indexOf(minNum2);
    let removed2 = array.splice(index2, 1);
    newArr.push(...removed2);
    console.log(newArr.join(' '));
}
solve([30, 15, 50, 5]);