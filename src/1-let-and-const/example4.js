'use strict';

const person = {
    name: 'Lyndsey',
    age: 30
};

// object keys can be mutated
person.favouriteLanguage = 'JavaScript';

// but objects cannot be overwritten!
person = {
    name: 'Joe'
};

// to create shallow immutable objects use Object.freeze
const anotherPerson = Object.freeze({
    name: 'Joe'
});

// cannot assign to read-only property
anotherPerson.name = 'Edward';
