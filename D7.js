/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

function concatenation(str1, str2) {
  let fullString = str1.slice(0, 2).concat(str2.slice(-3));
  return fullString.toUpperCase();
}

console.log(concatenation("prima", "seconda"));

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

function randomNumbers() {
  const arr = [];

  for (let i = 0; i < 10; i++) {
    const random = Math.floor(Math.random() * 101);
    arr.push(random);
  }

  return arr;
}

console.log(randomNumbers());

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
  */

function onlyEven() {
  let numbersArr = [];
  let evenNumOfPrevArr = [];

  for (let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * 101);
    numbersArr.push(random);

    /*if (random % 2 === 0) {
          evenNumOfPrevArr.push(random);
        }*/

    const even = numbersArr.filter((num) => {
      return num % 2 === 0;
    });

    evenNumOfPrevArr = even;
  }

  return { numbersArr, evenNumOfPrevArr };
}

let myResults = onlyEven();

console.log("All numbers:", myResults.numbersArr);
console.log("Even numbers:", myResults.evenNumOfPrevArr);

/* ESERCIZIO 4 (forEach)
Scrivi una funzione per sommare i numeri contenuti in un array
*/

let numbers = [];

function sumNum() {
  for (let i = 0; i < 5; i++) {
    const random = Math.floor(Math.random() * 101);
    numbers.push(random);
  }
  let sum = 0;

  numbers.forEach((num) => {
    sum += num;
  });

  return { numbers, sum };
}

let call = sumNum();

console.log("Selected numbers are:", call.numbers);
console.log("The sum is:", call.sum);

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

function sommaReduceMethod() {
  let arrNum = [];

  for (let i = 0; i < 7; i++) {
    let random = Math.floor(Math.random() * 51);
    arrNum.push(random);
  }

  const reduceMethod = arrNum.reduce((total, num) => {
    return (total += num);
  }, 0);

  return { arrNum, reduceMethod };
}

const reduceSum = sommaReduceMethod();

console.log("Numeri richiamati:", reduceSum.arrNum);
console.log("La somma è:", reduceSum.reduceMethod);

/*function sommaAlternativa() {
  let somma = 0;
  for (i = 0; i < numbers.length; i++) {
    somma += numbers[i];
  }
  return somma;
}
console.log(sommaAlternativa());*/

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

function incrementValue(n) {
  let arrNums = [];

  for (let i = 0; i < 5; i++) {
    let random = Math.ceil(Math.random() * 50);
    arrNums.push(random);
  }

  const mapMethod = arrNums.map((num) => num * n);

  return { arrNums, mapMethod };
}

let incrementFunction = incrementValue(3);

console.log("L' Array originale è:", incrementFunction.arrNums);
console.log("L'incremento con n è:", incrementFunction.mapMethod);

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

function arrLength(arrStr) {
  //let arrStr = ["La", "nutella", "è", "buonissima"];

  const myStrLength = arrStr.map((str) => str.length);
  console.log(myStrLength);

  return { arrStr, myStrLength };
}

const callArrLength = arrLength(["Mi", "faccio", "un", "bel", "bagno"]);

console.log("L'Array di stringhe originali è:", callArrLength.arrStr);
console.log("L'Array che conta la lunghezza di ogni stringa è:", callArrLength.myStrLength);

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

//RIVEDERE CON METODO FOREACH() + ARRAY.FROM({LENGTH: 99}, (_, i) => i + 1))

function onlyOdd() {
  let odds = [];
  for (let i = 1; i <= 99; i++) {
    if (i % 2 !== 0) {
      odds.push(i);
    }
  }
  return odds;
}

console.log("Odd numbers from 1 to 99 are: ", onlyOdd());

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

function theOldestMovie(movies) {
  let arrYears = [];
  let oldestOne = parseInt(movies[0].Year);

  movies.forEach((movie) => {
    let year = parseInt(movie.Year);
    arrYears.push(year);

    if (year < oldestOne) {
      oldestOne = parseInt(movie.Year);
    }
  });

  /*for (let i = 0; i < movies.length; i++) {
    let year = parseInt(movies[i].Year);
    arrYears.push(year);
  }*/
  return { arrYears, oldestOne };
}

const oldestFunction = theOldestMovie(movies);

console.log("List of movies' years:", oldestFunction.arrYears);
console.log("The oldest movie is:", oldestFunction.oldestOne);

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

function howManyMovies(movies) {
  const howMany = movies.length;

  return howMany;
}

console.log("How many movies are in this movies' list?", howManyMovies(movies));

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

function onlyTitle(movies) {
  return movies.map((movie) => movie.Title);
}

console.log("List of movies' titles:", onlyTitle(movies));

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

function millenium(movies) {
  return movies.filter((movie) => {
    if (movie.Year >= 2000) {
      return movie;
    }
  });
}

console.log("The newest movies are:", millenium(movies));

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

function yearSum(movies) {
  return movies.reduce((total, movie) => {
    return (total += parseInt(movie.Year));
  }, 0);
}

console.log("The sum of all years is:", yearSum(movies));

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

function findMovieBy(movies, id) {
  return movies.find((movie) => movie.imdbID === id);
}

console.log("Find movie", findMovieBy(movies, "tt0399295"));

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/

function movieIndex(movies, parYear) {
  return movies.findIndex((movie) => parseInt(movie.Year) === parYear);
}

console.log("The Index is:", movieIndex(movies, 2003));
