function solve(array) {

    array.sort((a,b) => a-b);
    let newArray = [];
    while(array.length != 0) {
        newArray.push(array.shift(),array.pop());
    }
    return newArray; 
}