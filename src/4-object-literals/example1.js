function factory(name) {

    const getName = () => name;

    return {
        name: name,
        getName: getName,
        setName: function(newName) {
            name = newName;
            return this;
        }
    };
}

const person = factory('Lyndsey');
const person2 = factory('John');

console.log(person.name);
console.log(person2.getName());
