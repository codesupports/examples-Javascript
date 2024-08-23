// Closure is the combination of function where inner function can get the access of scope(var and arg) of outer function.

/*
How Closures Work?
When a function is defined inside another function, the inner function retains access to the outer function's variables. 
This is because the inner function forms a closure that "encloses" the environment in which it was created.
 */

function outerFunction() {
    let outerVariable = 'I am from outer function';

    function innerFunction() {
        console.log(outerVariable); // innerFunction has access to outerVariable
    }

    return innerFunction;
}

const myClosure = outerFunction(); // outerFunction returns innerFunction
myClosure(); // Outputs: "I am from outer function"
