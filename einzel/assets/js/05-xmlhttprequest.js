fetch("https://openlibrary.org/books/OL7353617M.json").then(res=>res.json()).then(y=>yaz(y))
function yaz(y){
    console.log(y.isbn_13);
    const output = document.querySelector("#output");
        output.innerHTML = `<h2>${y.isbn_10}</h2><p>${y.isbn_13}</p>`;

}


/* const request = new XMLHttpRequest();
request.open("GET", "https://openlibrary.org/books/OL7353617M.json");
request.onreadystatechange = function() {
    if (request.readyState == XMLHttpRequest.DONE) {
        const book = JSON.parse(request.responseText);
        console.log(book)

        const output = document.querySelector("#output");
        output.innerHTML = `<h2>${book.title}</h2><p>${book.first_sentence.value}</p><p>${book.isbn_13}</p>`;
    }
}

request.send(); */