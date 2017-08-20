// finding the first element in an Array that satisfies the 
// passed in predicate function...

const find = function(array, predicate) {
    for (let i = 0, len = array.length; i < len; i++) {
        if (predicate(array[i], i, array)) {
            return array[i];
        }
    }
};

const array = [1, 2, 3, 4, 5];
const findGreaterThan3 = find(array, x => x > 3);
const findGreaterThan10 = find(array, x => x > 10);

console.log(findGreaterThan3);
console.log(findGreaterThan10);

// using ES6...
console.log(array.find(x => x > 1));
console.log(array.findIndex(x => x > 1));
