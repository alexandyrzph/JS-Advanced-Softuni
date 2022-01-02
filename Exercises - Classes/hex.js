class Hex {
    constructor(value) {
        this.value = Number(value);
    }

    //return the value property of the hex class
    valueof() {
        return this.value;
    }

    //show its hexadecimal value starting with "0x"
    toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    }

    //add a number or Hex object and return a new Hex object
    plus(number) {
        let kvp = Number(Object.values(this));
        let sum = kvp + Number(number);
        return new Hex(sum);
    }

    //subtract a number or Hex object and return a new Hex object
    minus(number) {
        let kvp = Number(Object.values(this));
        let sum = kvp - Number(number);
        return new Hex(sum);
    }

    //class method that can parse Hexidecimal numbers and convert them to standard decimal numbers
    static parse(string) {
        return parseInt(string, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(Hex.parse('AAA'));