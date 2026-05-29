//function overloading - function with same but different parameter
function add() { // function  without parameter
    consoel.log(10 + 10);
}  

function add(a) { // function with one parameter
    console.log(a + 10);
}

function add(a, b) { // function with two parameter
    console.log(a + b);
}

add() //undefined + undefined = NaN
add(10) //undefined + 10 = NaN
add(10, 20) //10 + 20 = 30

//... spread operator - function with same but different parameter
//... = 0 - n = 1D [] numbers = [10, 30, 40]   num = 30   sum = 40  
function add(...numbers) { // function with rest parameter 
    let sum = 0;
    for (let num of numbers) {
        sum += num; // sum = sum + num
    } 
    return sum; 
    console.log(`The sum is $ {sum}`);
}

console.log(add(10)); // Output: 10 
console.log(add(10, 30)); // Output: 40
console.log(add(10, 30, 40)); // Output: 80 
