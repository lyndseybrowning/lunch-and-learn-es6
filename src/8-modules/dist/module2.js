"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sum = sum;
exports.multiply = multiply;
// we can export multiple functions
// from the same module :)
function sum(a, b) {
    return a + b;
}

function multiply(a) {
    return a * a;
}

// and we can export objects or other values
var num = exports.num = 12;