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

const obj = {
    name: 'John',
    age: 34
};

// we can also use spread to shallow-copy objects...
// however, this is not (yet) standardised
// and can be enabled using a babel-polyfill or by using Node V8
//const john = { ...obj };

// objects can also be copied using ES6's Object.assign method
const obj2 = Object.assign({}, obj);

obj2.age = 35;

console.log(obj);
console.log(obj2);


