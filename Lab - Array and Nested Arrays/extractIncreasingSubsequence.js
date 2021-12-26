function extract(array) {
    let newArray = [];
    let biggest = Number.MIN_SAFE_INTEGER;
    array.reduce((accumulator, item) => {
        if(item >= biggest) {
            biggest = item;
            accumulator.push(item);
        }


        return accumulator;

    }, newArray)

    return newArray;

}
console.log(extract([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]));
console.log(extract([1,
    2,
    3,
    4
]));
console.log(extract([20,
    3,
    2,
    15,
    6,
    1
]));