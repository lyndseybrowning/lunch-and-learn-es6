const str = 'hello world';

// check if a string exists in a string using ES5...
console.log(str.indexOf('hello') > -1);
console.log(str.indexOf('abcde') > -1);

// using ES6...
console.log(str.includes('hello'));
console.log(str.includes('abcde'));

// we can do the same with Arrays, too
console.log(['a', 'b', 'c'].includes('a'));
console.log(['a', 'b', 'c'].includes('blah'));
