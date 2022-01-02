class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString
        this.innerLength = innerLength;
    }
    increase(length) {
        return this.innerLength += length;
    }
    decrease(length) {
        return this.innerLength - length < 0 ? this.innerLength = 0 : this.innerLength -= length;
    }
    toString() {
        let repeatTimes = this.innerString.length - this.innerLength;
        if (repeatTimes <= 0) {
            return this.innerString;
        }
        if (this.innerLength == 0) {
            return '.'.repeat(3);
        }
        return this.innerString.substring(0, this.innerLength).concat('.'.repeat(3));
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test */  