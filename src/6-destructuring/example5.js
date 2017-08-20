// ES5...
function es5Module(options) {
    const color = options.color;
    const size = options.size;

    switch (color) {
        case 'red':
            break;
    }
}

// using ES6, we can destructure the object straight into function parameters
// so that we don't have to redeclare the options inside the function
// and so that we only include what we need :)
function es6Module({ color, size }) {
    console.log(color);
}

es5Module({ 
    color: 'red'
});

// we're passing in color, size, something and another
// but only color and size are being referenced inside the module!
es6Module({
    color: 'blue',
    size: 10,
    something: true,
    another: 50
});
