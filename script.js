const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Последний просмотренный фильм?',''),
      b = prompt('Оценка?',''),
      c = prompt('Последний просмотренный фильм?',''),
      d = prompt('Оценка?','');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
