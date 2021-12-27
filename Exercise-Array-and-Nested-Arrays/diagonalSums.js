function solve(matrix) {

    let sumArr = [];
    let firstDiag = 0;
    let secondDiag = 0;
    for (let i = 0; i < matrix.length; i++) {
        let currentNum = matrix[i][i];
        firstDiag += currentNum;
    }

    let idx = matrix.length;
    
    for (let i = 0; i < matrix.length; i++) {
        idx--;
        let currentNum = matrix[idx][i];

        secondDiag += currentNum;
    }
    console.log(`${firstDiag} ${secondDiag}`);

}
solve([
    [20, 40],
    [10, 60]
]);
solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);