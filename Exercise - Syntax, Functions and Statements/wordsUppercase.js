function wordUpper(str) {
    return str.match(/[\w]+/g).join(', ').toUpperCase()
}
solve('Functions in JS can be nested, i.e. hold other functions');
solve('Hi, how are you?');