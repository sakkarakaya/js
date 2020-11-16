/**
 * VARIABLES
 */
const three = 3;
const six = 6;

console.log("Hallo", 10, six);

var x = 10;
console.log(x);
var x = '10';
console.log(x);
var x = "10";
console.log(x);

// add six to three
console.log(6+3);

// subtract six from three
console.log(6-3);

// multiply three times six
console.log(6*3);

// divide three by six
console.log(6-3);

// modulo six by three
console.log(6%3);

// log results

// build a function, that:
// takes two parameters
// checks if both parameters are numbers, else returns error message in the console
// divides the first one by the second one
// adds three to the result of the division
// multiplies the result by the second parameter
// when the result is equal to 21, subtract 4
// else add 4
// and then returns the result

function m(n1,n2){
    
    if (typeof n1 != 'number'){
        return console.error('s1');
    }
    
    if (typeof n2 != 'number'){
        return console.error('s2');
    }
    
    let result = n1/n2;
    result += 3;
    result *=2;

    switch(result){
        case 21:
            result = result - 4;
            break;
        default:
            result = result + 4;
            break; 
    }
    return result;
}


// log the result of the function

console.log('ergebnis:', m(10,5));