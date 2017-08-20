const sumAll = (first, second, third) => {
    return (first + second + third);
};

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// spread allows us to combine arrays
const newArray = [...array1, ...array2];

console.log(newArray);

// we can use it to destructure array into arguments
const sum = sumAll(...array1);

console.log(sum);

// we can also use it to shallow-copy objects...
// however, this is still not fully standardised (stage 3)
// and can be enabled using a babel-polyfill or by using Node V8
const obj = {
    name: 'John',
    age: 34
};

// this is syntactic sugar for Object.assign({}); 
// in ES5
const john = { ...obj };

console.log(john);


