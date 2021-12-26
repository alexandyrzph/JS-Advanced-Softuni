function rotateArray(array, rotations) {

    for (let i = 0; i < rotations; i++) {
        let shifted = array.shift();
        array.push(shifted);
    }
    console.log(array.join(' '));

}
rotateArray(['1',
    '2',
    '3',
    '4'
], 2);