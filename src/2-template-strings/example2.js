const movie = {
    title: 'Forrest Gump',
    actor: 'Tom Hanks',
    yearOfRelease: 1991,
    getMovie: function() {
        console.log(`${this.title} was released in ${this.yearOfRelease}. The main part was played by ${this.actor}`);
    }
};

movie.getMovie();
