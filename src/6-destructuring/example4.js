const myModule = (() => {

    const name = 'Jane';
    const favouriteFood = 'Pizza';

    return {
        getName() {
            return name;
        },
        getFavouriteFood() {
            return favouriteFood;
        }
    };

})();

// we can also use destructuring to filter methods from modules
// here, we are only referencing the getName function
const { getName } = myModule;

console.log(getName());
