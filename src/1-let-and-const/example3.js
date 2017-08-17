const addTwoNumbers = function(a, b) {
    return a + b;
};

const sum = addTwoNumbers(1, 2);

// constants cannot be reassigned
// this will cause a TypeError: Assignment to constant variable
sum = 10; 

// constants cannot be redeclared, either!
const sum = addTwoNumbers(10, 20);
