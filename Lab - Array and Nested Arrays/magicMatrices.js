function matrix(array) {

    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    for (let i = 0; i < array.length; i++) {
        sum1+=array[0][i];
        sum2+=array[1][i];
        sum3+=array[2][i];
    }
    if(sum1 == sum2 && sum2 == sum3 && sum3 == sum1) {
        console.log(true);
    } else {
        console.log(false);
    }
}
matrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
matrix([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
])
matrix([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
])