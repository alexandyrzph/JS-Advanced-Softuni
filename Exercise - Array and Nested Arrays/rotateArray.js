function solve(strArr, rotations) {

    for (let i = 0; i < rotations; i++) {
        let lastEl = strArr.pop();
        strArr.unshift(lastEl);
    }
    console.log(strArr.join(' '));
}
solve(['1', '2', '3', '4'], 2);