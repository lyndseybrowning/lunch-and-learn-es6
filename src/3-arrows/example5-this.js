const button = document.querySelector('.myButton');

button.addEventListener('click', () => {
    this.innerHTML = 'This is a cool button!';
});

// what about jQuery?
$(button).click(() => {
    console.log($(this)); // this is the Window object!
});
