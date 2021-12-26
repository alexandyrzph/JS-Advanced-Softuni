function solve(n, k) {

    let newArr = [1];
    for (let i = 1; i < n; i++) {
        let sum =0;
        let startIndex = Math.max(0, i - k);
        for (let j = startIndex; j < i; j++) {
            sum+= newArr[j];
        }
        newArr[i] = sum;
    }
    return newArr;
}
console.log(solve(6,3));