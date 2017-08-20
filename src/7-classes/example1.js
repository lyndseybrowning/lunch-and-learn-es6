function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function() {
    return `hello ${this.name}`;
};

const person = new Person('Simon', 31);

console.log(person.name);
console.log(person.sayHello());
