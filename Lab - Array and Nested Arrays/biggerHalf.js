function solve(array) {
    // first we sort the given array
    array.sort((a, b) =>
        b - a
    );
    // here we get the length for all cases
    let arrLength = Math.ceil(array.length/2);
    // declaring the array that we will return
    let newArray = [];

    // push the values of the sorted array
    for (let i = 0; i< arrLength; i++) {
        newArray.push(array[i]);
    }
    return newArray.reverse();
}
console.log(solve([4, 7, 2, 5]));
console.log(solve([3, 19, 14, 7, 2, 19, 6]));