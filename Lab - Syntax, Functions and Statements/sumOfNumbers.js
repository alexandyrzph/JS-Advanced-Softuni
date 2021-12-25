function sumOfNumbers(num1, num2) {

    let num1AsNumber = Number(num1);
    let num2AsNumber = Number(num2);
    let totalSum = 0;
    for (let i = num1AsNumber; i <= num2AsNumber; i++) {
        totalSum += i;
    }
    return totalSum;
}
console.log(sumOfNumbers('1', '5'));
console.log(sumOfNumbers('-8', '20'));