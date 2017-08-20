function sumAll(a, ...values) {
    // arguments is an array-like object only
    // so cannot perform methods such as reduce or forEach
    console.log(arguments);
    
    // values is an Array
    console.log(values);

    return a + values.reduce((sum, value) => sum + value, 0);
}

sumAll(1, 2, 3, 4);
