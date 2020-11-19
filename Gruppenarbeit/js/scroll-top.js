/**
 * SCROLL TO TOP BUTTON
 * 1. add the class "visible" to the element with the id "return-to-top", 
 * when the user scrolled at least the window height
 * 
 * 2. when the user clicks the button, 
 * scroll the page all the way up to the start
 * 
 */





window.addEventListener("scroll", fscroll);

function fscroll() {
    var y =  window.scrollY; 
    if (y >= window.innerHeight){
        document.getElementById("return-to-top").setAttribute("class", "visible");
    }
    else{
        document.getElementById("return-to-top").setAttribute("class", "");
    }
}


document.getElementById("return-to-top").addEventListener("click", ftop);
function ftop(){
    document.documentElement.scrollTop = 0;
}