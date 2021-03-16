let myArray = [6, 7, 11, 2, 123, 3, 55];

function sortElements1(a, b){
    return a-b;
}
const n1 = myArray.sort(sortElements1)

const sortElements2 = (a, b) => {a-b};
const n2 = myArray.sort(sortElements2);

const n3 = myArray.sort(function(a, b){return a-b});

const n4 = myArray.sort((a, b) => a-b);

console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)
