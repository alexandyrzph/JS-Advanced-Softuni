function solve(array) {
    const first = Number(array.shift());
    const last = Number(array.pop());
    return first + last;
}
console.log(solve(['20', '30', '40']));