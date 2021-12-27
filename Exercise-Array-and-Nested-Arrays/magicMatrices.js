function matrix(array) {

    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    for (let el of array) {
        sum1 += el[0];
        sum2 += el[1];
        sum3 += el[2];
    }
    if (sum1 == sum2 && sum2 == sum3 && sum1 == sum3) {
        console.log(true);
    } else {
        console.log(false);
    }
}