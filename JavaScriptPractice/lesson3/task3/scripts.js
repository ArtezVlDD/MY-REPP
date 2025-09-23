function toSquareRoot(num) {
    return Math.sqrt(num);
}

let param1 = 3;
let param2 = 4;

console.log(toSquareRoot(param1));
console.log(toSquareRoot(param2));

console.log(toSquareRoot(param1) + toSquareRoot(param2));

function findMinNumber(num1, num2) {
    if (num1 < num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}

findMinNumber(3, 6);