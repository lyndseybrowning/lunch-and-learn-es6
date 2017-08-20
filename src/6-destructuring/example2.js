const myModule = (options) => {
    // we can use destructuring to grab any property(ies) we like!
    const { color } = options;

    console.log(color);
};

myModule({
    enabled: true,
    color: 'red'
});
