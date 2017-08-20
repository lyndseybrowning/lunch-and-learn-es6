const sumAllValues = (a, b, ...rest) => {
    return rest.reduce((sum, value) => sum + value, 0);
};

console.log(sumAllValues(1, 2, 3, 4, 5));
