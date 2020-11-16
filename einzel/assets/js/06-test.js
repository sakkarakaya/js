// listen to the submit of the form and prevent default
document.getElementById('submit').addEventListener('click', h);
function h(e){
    e.preventDefault();
    qw = document.getElementById('input').textContent;
//    localStorage.setItem("input", qw);
}

// then save the form data and send it to https://hsh.blnq.dev/javascript-basics/form-fetch.php
// log the response





// get data from public api https://openlibrary.org/books/OL7353617M.json
var urll = "https://openlibrary.org/books/OL7353617M.json";
var xhr = new XMLHttpRequest();
xhr.open('GET', urll, true);
xhr.onload = function(){
    
    //console.log(this.responseText);
    var htmll = JSON.parse(request.responseText);

    document.getElementById('output').innerHTML = `${htmll.title}`;
}
xhr.send();


// and display the title, first sentence & isbn 13 in the #output element
