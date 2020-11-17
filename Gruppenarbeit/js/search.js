/**
 * 
 * CSS-ANIMATIONS
 * 1. Toggle the class "hidden" from the searchbar element, when the user clicks search button
 * 2. Clear the input by clicking the "x" button
 * 
 */


 //document.getElementsByClassName("search-btn").addEventListener("click", f);
 function f(){
    document.getElementById("searchbar").classList.toggle("hidden");
 }


 //document.getElementById("x").addEventListener("click", f2);
 function f2(){
    document.getElementById("searcharea").value = "";
 }