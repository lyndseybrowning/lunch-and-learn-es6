"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var calculator = function calculator() {
    var total = 0;

    return {
        add: function add(num) {
            total += num;
            return this;
        },
        subtract: function subtract(num) {
            total -= num;
            return this;
        },
        multiply: function multiply(num) {
            total *= num;
            return this;
        },
        getTotal: function getTotal() {
            return total;
        }
    };
};

// export a default function
// which is considered the main exported value
// and is used when we want to export a single value
exports.default = calculator;