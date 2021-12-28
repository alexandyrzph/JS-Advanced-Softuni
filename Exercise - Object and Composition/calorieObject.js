function solve(array) {

    let myObj = {};
    for (let i = 0; i < array.length; i+=2) {
        myObj[array[i]] = Number(array[i+1]);  
    }
    console.log(myObj);
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);