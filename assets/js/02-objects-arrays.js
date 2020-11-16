/**
 * OBJECTS
 */
let books = {
  book1: '1984',
  book2: 'Faust',
  book3: 'Fantastic Mr. Fox'
};

a = books.book1;
console.log(books);
console.log(a);

// add a new book to the books object
// using dot notation

books.book4 = "The Catcher in the Rye";
console.log(books.book4);

// using square bracket notation
books['book5'] = "Schah";

// remove an book from the books object
delete books.book2;

// log the third book
console.log(books.book3);
console.log(books);

// iterate over the books and log every single one
var t = "";
for(x in books){
  t += books[x] + "\n";
}
console.log(t);


/**
 * ARRAYS
 */
let movies = ['Pulp Fiction', 'Inception', 'Call me by your name', 'Batman'];
console.log(movies);

// add a new movie to the array
movies[movies.length] = "Truman Show";
console.log(movies);

// remove the movie „Call me by your name“ from the movies object
delete movies[2];
console.log(movies);

// log the first movie
console.log(movies[0]);

// iterate over the movies and log every single one 
var movieslist = "";
for (x in movies){
  movieslist += movies[x] + "\n";
}
console.log(movieslist);