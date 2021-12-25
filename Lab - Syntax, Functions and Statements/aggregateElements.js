function aggregateElements(array) {
    let sum = 0;
    let inverseSum = 0;
    let concatString = '';
    for (let el of array) {
        sum += el;
        // the inverse of number is 1/theNumber;
        inverseSum += 1/el;
        concatString += el;
    }
    console.log(sum);
    console.log(inverseSum);
    console.log(concatString);
}
aggregateElements([1, 2, 3]);