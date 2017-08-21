import calculator from './calculator';

const sum = calculator()
    .add(10)
    .multiply(100)
    .subtract(50)
    .getTotal();

console.log(sum);
