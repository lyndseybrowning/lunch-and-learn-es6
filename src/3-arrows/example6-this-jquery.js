// what problems do arrow functions solve?

const person = {
    name: 'John', 
    getLikes: function(likes) {
        likes.forEach(function(like) {
            console.log(`${this.name} likes ${like}`);
        });
    },
    getMoreLikes: function(likes) {
        likes.forEach((like) => {
            console.log(`${this.name} likes ${like}`);
        });
    }
};

person.getLikes(['Pizza', 'Chocolate']);
person.getMoreLikes(['Crisps']);

