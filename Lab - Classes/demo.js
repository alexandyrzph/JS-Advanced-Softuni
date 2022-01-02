class Person {

    constructor(name, age = 18, secret) {
        this.name = name;
        this.age = age;

        this.secretField = () => secret;
    }

    sayHello() {
        console.log(`${this.name} says hi! I am ${this.age} y old`);
    }

    static compareTo(a, b) {
        return a.age - b.age;
    }

}

// instance of 

const person1 = new Person('Peter', 23, 'secretMessage');
const person2 = new Person('George', 29);

person1.height = 178;
console.log(person1.secretField());