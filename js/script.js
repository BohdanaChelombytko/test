// const number0fFilms = +prompt('How many films have you watched?', '');
// const personalMovieDB = {
//     count: number0fFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// const a = prompt('Last film?', ''),
//     b = prompt('How much do you like it?', ''),
//     c = prompt('Last film?', ' '),
//     d = prompt('How much do you like it?', '');
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);

//
// const num = 50;
// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('A lot');
// } else {
//     console.log('OK!');
// }
// (num !== 50) ?console.log('OK!') : console.log('Error');

// switch (num) {
//     case 49:
//         console.log('Wrong');
//         break;
//     case 100:
//         console.log('Wrong');
//         break;
//     case 51:
//         console.log('Exactly!');
//         break;
//     default:
//         console.log('Not now');
//         break;
// }

// const hum = 2;
// const fries = 1;
// const cola = 0;
// if (hum === 2 && cola===1 && fries ) {
//     console.log('we are happy');
// } else {
//     console.log('we are leaving');
// }

// const hum = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
// if (hum ===3 && cola ===2 || fries===3 && nuggets) {
//     console.log('we are happy');
// } else {
//     console.log('we are leaving');
// }


// let johnReport, alexReport, samReport, mariaReport = 'done';
// console.log(johnReport || alexReport || samReport || mariaReport);

// console.log(NaN || 2 || undefined);
// console.log(NaN && 2 && undefined);
// console.log(1 && 2 && 3);
// console.log(!1 && 2 || !3);
// console.log(25 || null && !3);
// console.log(NaN || null || !3 || undefined || 5);
// console.log(NaN || null && !3 && undefined || 5);
// console.log(5 === 5 && 3 > 1 || 5);


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//     console.log('Done!')
// }


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//     console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//     console.log('Done!')
// } else {
//     console.log('error');
// }

// let num = 50;
// // while (num < 55) {
// //     console.log(num);
// //     num++;
// // }

// do {
//     console.log(num);
//         num++;
// }
// while (num < 55);


// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         break;
//     }
//     console.log(i)
// }

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         continue;
//     }
//     console.log(i)
// }

// for (i = 0; i < 3; i++) {
//     console.log(i);
//     for (j = 0; j < 3; j++) {
//         console.log(j);

//     }
// }


// let result = '';
// let lenght = 7;
// for (i = 1; i < lenght; i++) {
//     for (j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += '\n'
// }
// console.log(result);


// first: for (i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);

//         }

//     }
// }

// first: for (i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (k = 0; k < 3; k++) {
//             if (k === 2) break first;
//             console.log(`Third level: ${k}`);

//         }

//     }
// }

// let i = 2;
// while (i <= 16) {
//     if (i % 2 === 0) {
//         i++; // не забути збільшити лічильник, щоб уникнути нескінченного циклу!
//         continue;
//     } else {
//         console.log(i);
//     }
//     i++;
// }


// const number0fFilms = +prompt('How many films have you watched?', '');
// const personalMovieDB = {
//     count: number0fFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// for (let i = 0; i < 2; i++) {
//     const a = prompt('Last film?', ''),
//         b = prompt('How much do you like it?', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }

// }
// if (personalMovieDB.count < 10) {
//     console.log('message 1');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('message 2');
// } else if (personalMovieDB.count >= 30) {
//     console.log('message 3');
// } else {
//     console.log('message 4');
// }
// console.log(personalMovieDB);

// const number0fFilms = +prompt('How many films have you watched?', '');
// const personalMovieDB = {
//     count: number0fFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// for (let i = 0; i < 2; i++) {
//     const a = prompt('Last film?', ''),
//         b = prompt('How much do you like it?', '');
//     personalMovieDB.movies[a] = b;

// }
// let i = 0;
// while (i < 2) {
//     const a = prompt('Last film?', ''),
//         b = prompt('How much do you like it?', '');
//     personalMovieDB.movies[a] = b;
//     i++;
// }
// do {
//     const a = prompt('Last film?', ''),
//         b = prompt('How much do you like it?', '');
//     personalMovieDB.movies[a] = b;
//     i++;
// } while (i < 2);


// console.log(personalMovieDB);

// function showFirstnmb(test) {
//     console.log(test);
// }
// showFirstnmb('Hello world');



// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(5, 4));



// const logger = function () {
//     console.log("Hello");
// };
// logger();

// const calc = (a, b) => (a + b);
// console.log(calc(3, 2));


// let usdCurr = 28,
//     eurCurr = 32;
// function convert(amount, curr) {
//     console.log(curr * amount);
// }
// convert(500, usdCurr);
// convert(500, eurCurr);


// let usdCurr = 28;
// let discount = 0.9;
// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(discount*result)
// }
// const res = convert(500, usdCurr);
// promotion(res);

// const str = 'test';
// console.log(str.toLocaleUpperCase());
// console.log(str.toLocaleLowerCase());

// const fruit = 'Some fruit';
// console.log(fruit.indexOf("f"));

// const logg = 'Hello world';
// console.log(logg.slice(6, 11));

// const logg = 'Hello world';
// console.log(logg.substring(6, 11));

// const logg = 'Hello world';
// console.log(logg.substr(6, 2));


// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));

/* Задание на урок:

1) Первую часть задания повторить по уроку



2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно */

let number0fFilms;

function start() {
    number0fFilms = +prompt('How many films have you watched?', '');
    while (number0fFilms == '' || number0fFilms == null || isNaN(number0fFilms)) {
        number0fFilms = +prompt('How many films have you watched?', '');
    }
}
start();

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Last film?', ''),
            b = prompt('How much do you like it?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }

    }
}
// rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('message 1');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('message 2');
    } else if (personalMovieDB.count >= 30) {
        console.log('message 3');
    } else {
        console.log('message 4');
    }
}
// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;

    }
}
writeYourGenres();