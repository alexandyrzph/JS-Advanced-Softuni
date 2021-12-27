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