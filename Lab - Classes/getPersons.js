function getPersons() {

    class Person {
            constructor(firstName, lastName, age, email) {
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
    }
    return [
        new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'),
        new Person('SoftUni'),
        new Person('Stephan', 'Johnson', 25),
        new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'),
    ];
}

let persons = getPersons();

console.log(persons)
let personsAsString = persons.join(", ");
console.log(personsAsString)
