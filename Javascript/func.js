function add() {
    let c = 10 + 20;
    console.log(c);
}
//call function
add()

// 1. Without input and without output
function square() {
    let num = 10;
    let res = num * num;

    console.log(res);
}

square();


// 2. With input and without output
function square1(num) {
    let res = num * num;

    console.log(res);
}

square1(4);


// 3. Without input and with output
function square2() {
    let num = 6;

    return num * num;
}

console.log(square2());


// 4. With input and with output
function square3(num) {
    return num * num;
}

let res = square3(3);

console.log(`The square of the number is ${res}`);