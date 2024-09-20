# IIFE (Immediately Invoked Function Expression)-------------------

(function() {
  // Code inside the IIFE
  console.log("This runs immediately!");
})();


(() => {
  console.log("This runs immediately as well!");
})();

Qus: Why Use IIFE?
  Ans: Avoid Global Scope Pollution: Variables declared inside an IIFE are not accessible outside of it, which helps prevent conflicts with other scripts.
(function() {
  var privateVar = "I'm private";
})();

console.log(privateVar); // ReferenceError: privateVar is not defined
