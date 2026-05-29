// 1. Function Declaration
function add(a, b, c) {
    console.log(a + b + c);
}
add(10, 20, 30);

// 2. Function Expression
let add1 = function(a, b, c) {
    console.log(a + b + c);
}
add1(5, 10, 15);


//3 Arrow Function with Implicit Style
let add3 = (a, b, c) => console.log(a + b + c);
add3(7, 8, 9);

// 4. IIFE
(function(a, b, c) {
    console.log(a + b + c);
})(100, 200, 300);