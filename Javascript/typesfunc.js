function greet() {
    console.log("Hello, World! from function declaration"); 
}
greet() //function call

//function Expression
let greet1 = function() {
    console.log("Hello, World! from function expression");
}
greet1();
//Arrow function
let greet2 = () => {
    console.log("Hello, World! from arrow function");
}
greet2();
//or
let greet3 = () => console.log("Hello, World! from arrow function with implicit return");
greet3();
//IIFE - Immediately Invoked
(function() {
    console.log("Hello, World! from IIFE");
})();
// function Expression

//Assigment - 4 ways you need to create a function for adding 3 numbers
