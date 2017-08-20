const coordinates = [10, 20];
const [x, y] = coordinates;

// x and y can be destructed into separate variables...
console.log(x, y);

// and we can combine it with rest params
const [a, b, ...rest] = [1, 2, 3, 4, 5];

console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]
