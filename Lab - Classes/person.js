class Person {
    constructor(firstName, lastName, age, email) {
        // we connect them to the instance with obj assign
        Object.assign(this, {
            firstName,
            lastName,
            age,
            email
        });
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
    //Peter Marinov (age: 18, email: pesho18@abv.bg)
}

const guy = new Person('John', 'Smith', 32, 'john@smith.com');
console.log(`${guy}`);