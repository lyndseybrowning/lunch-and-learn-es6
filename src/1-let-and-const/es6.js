if (true) {
    // let and const are block-scoped
    let x = 1;
    const y = 2;
    
    y = 3; // TypeError: Assignment to constant variable
}

console.log(x); // ReferenceError: x is not defined
