const myModule = (options) => {
    const enabled = options.enabled;
    const color = options.color;

    console.log(enabled);
    console.log(color);
};

myModule({
    enabled: true,
    color: 'red'
});
