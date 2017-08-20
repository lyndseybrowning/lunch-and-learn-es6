function factory(name) {

    const getName = () => name;

    return {
        name,
        getName,
        setName(newName) {
            name = newName;
            return this;
        }
    };
}

const person = factory('Lyndsey');
person.setName('John');

console.log(person.getName());
