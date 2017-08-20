// repeating a string using ES5...
const repeatString = (str, times) => {
    let counter = 0;  
    let repeatedStr = '';

    while(counter < times) {
        repeatedStr += str;
        counter++;
    }

    return repeatedStr;
};

console.log(repeatString('abc', 2));

// using ES6 is super simple!
const repeated = 'abc'.repeat(2);

console.log(repeated);
