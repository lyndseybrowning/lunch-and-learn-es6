// performing Array methods on node-lists in ES5...

const elements = document.querySelectorAll('.elements');

// we have to convert elements to a real Array first
// by passing elements as 'this'
[].forEach.call(elements, (element) => {
    element.style.color = 'red';
});

// using ES6 is easy...

Array.from(elements).forEach((element) => {
    // do something with each element
});

// this is not ES6 but is a very useful method of ES5
// to check if something is an array!

Array.isArray([]); // true
Array.isArray({}); // false
