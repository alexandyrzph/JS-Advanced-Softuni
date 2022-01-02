    function argsInfo(...args) {

        let counterObj = {};

        for (const arg of args) {
            let typeOfArg = typeof arg;
            if (!counterObj[typeOfArg]) {
                counterObj[typeOfArg] = 1;
            } else {
                counterObj[typeOfArg]++;
            }
            console.log(`${typeof arg}: ${arg}`)
        }
        let sortedObj = {};
        let sortedArray = Object.entries(counterObj).sort((a, b) => b[1] - a[1]);
        for (const element of sortedArray) {
            sortedObj[element[0]] = element[1];
        }
        for (const key in sortedObj) {
            console.log(`${key} = ${sortedObj[key]}`)
        }

    }

argsInfo('cat', 42, function () {
    console.log('Hello world!');
});
argsInfo({ name: 'bob'}, 3.333, 9.999);