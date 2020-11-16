// log text content from #headline
console.log(document.getElementById('headline'));

// change the text from the headline to:
// „Cool, sie ist offen! :)“
document.getElementById('headline').innerHTML = "Cool, sie ist offen! :)";

// set value of the input element #input to:
// „Hier steht Text“
document.getElementById("input").value = "Hier steht Text";

// set the value of the input element #input
// as the innerHtml of the div #output
document.getElementById("output").innerHTML =  document.getElementById("input").value;

// add the class bg-black to the body
// if there it doesn't got it already

//document.body.setAttribute("class", "bg-black");
document.body.classList.add('bg-black');


// toggle the class border-red on the input
document.getElementById("input").classList.add("border-red");




// multiply the data-number attribute by 3
// and update the value in the dom

//getElementById("output").dataset.number = getElementById("output").dataset.number*3;




document.getElementById("pp").style.color = "green";