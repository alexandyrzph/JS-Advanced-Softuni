function solve(array) {

    array.sort((a,b) => a-b);
    let newArray = [];
    while(array.length != 0) {
        newArray.push(array.shift(),array.pop());
    }
    return newArray; 
}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));