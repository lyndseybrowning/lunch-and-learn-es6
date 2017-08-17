const person = {
    name: 'Lyndsey',
    age: 30,
    getName: function() {
        return this.name;
    },
    getAge: () => {
        return this.age;
    }
};

// what will the output be?
console.log(person.getName());
console.log(person.getAge());
