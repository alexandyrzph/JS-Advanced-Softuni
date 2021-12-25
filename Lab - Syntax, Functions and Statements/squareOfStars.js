function square(count) {

    let star = 0;
    if (count == 0) {
        count = 5;
    }
    while (star < count) {
        console.log('* '.repeat(count));
        star++;
    }
}
square(0);