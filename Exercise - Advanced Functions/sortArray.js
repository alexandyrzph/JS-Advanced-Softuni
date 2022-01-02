function solve(arr, command) {
    return command == 'desc' ? arr.sort((a, b) => b - a) : arr.sort((a, b) => a - b);
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));