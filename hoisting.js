// Hoisting is the default behaviour of Javascript where var and function declaration to move on the top.


// ** Variable Hoisting
console.log(x); // undefined
var x = 5;
console.log(x); // 5

var x; // Declaration is hoisted
console.log(x); // undefined
x = 5; // Initialization happens here
console.log(x); // 5


console.log(y); // ReferenceError: y is not defined
let y = 10;

// ** Function Hoisting
hello(); // "Hello, world!"

function hello() {
    console.log("Hello, world!");
}


goodbye(); // TypeError: goodbye is not a function (Note:- due to function expression hoisting is not working)

var goodbye = function() {
    console.log("Goodbye!");
};

// Note: Only in regular function hoisting is working. function expression and arrow function hoisting is not working

