const number0fFilms = +prompt('How many films have you watched?', '');
const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Last film?', ''),
    b = prompt('How much do you like it?', ''),
    c = prompt('Last film?', ' '),
    d = prompt('How much do you like it?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);