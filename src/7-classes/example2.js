class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        return `hello ${this.name}`;
    }
}

// classes must be instantiated with the 'new' keyword
// since they are simply syntactic sugar for constructor functions
// it is also common for Classes to be defined with PascalCase
const person = new Person('Simon', 31);

console.log(person.name);
console.log(person.sayHello());
