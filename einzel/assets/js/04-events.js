// log the value of the input on every input
document.querySelector('#input').addEventListener("keydown", eh);
function eh(e) {
    console.log(e.target.value);
}



// prevent default on button #submit click
document.querySelector('#submit').addEventListener("click", eh2);
function eh2(e){
    e.preventDefault();
}



// and change text of #output to „Der Button wurde geklickt!“
document.querySelector('#submit').addEventListener("click", eh3);
function eh3(){
    document.getElementById("output").innerHTML = "geklickt!";
}




// log the message „500px erreicht“, when the user scrolls more than 500px
window.addEventListener("scroll", eh4);

function eh4() {
    var y =  window.scrollY; 
    if (y>=500){
        console.log("erreicht");
    }
    
}