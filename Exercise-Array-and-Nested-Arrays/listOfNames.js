function solve(array) {
    array.sort((a, b) => a.localeCompare(b));
    array.forEach((el, index) => {
        console.log(`${index+1}.${el}`);
    })
}
solve(["John", "Bob", "Christina", "Ema"])