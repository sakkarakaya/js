/**
 * SAVE LIKED PRODUCTS
 * Select all of the like buttons, listen to the click element on every "like-btn" and 
 * the save the key of the "like-btn" to the localStorage.
 * Add the class "liked" if the button was clicked.
 * Check on reload if data is stored and add the liked class again
 * 
 * https://www.w3schools.com/jsref/prop_win_localstorage.asp
 * https://developer.mozilla.org/de/docs/Web/API/Window/localStorage
 * 
 */

var i;
for (i = 0; i < 8; i++){
 document.getElementsByClassName("like-btn")[i].addEventListener("click", f4);
}
 function f4(e){
    e.preventDefault();
    this.classList.toggle('liked');
 }

//  //document.getElementsByClassName("like-btn")[1].addEventListener("click", f5);
//  function f5(){
//     document.getElementById("test2").classList.add('liked');
//  }

//test