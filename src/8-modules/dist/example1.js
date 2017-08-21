'use strict';

var _calculator = require('./calculator');

var _calculator2 = _interopRequireDefault(_calculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sum = (0, _calculator2.default)().add(10).multiply(100).subtract(50).getTotal();

console.log(sum);