//Array 2 ways
//[]- in python list
let stu_info = [102,"John", 25, "Male", "Engineer"];
console.log(stu_info);

//Array constructor
let arr = new Array(1, 2, 3, 4);
console.log(arr);

//Array elelments
arr.push(5)
arr.unshift(0)
arr.pop()
arr.shift()
console.log(arr);

// splice & slice

let nums = [10, 20, 30, 40, 50]
console.log(nums)

// array.splice(startIndex, deleteCount, item1, item2, ...)

// Removes 2 elements starting from index 0
// and adds 300 in their place
nums.splice(0, 2, 300)
console.log(nums)

let arr1 = nums.slice(3,5)
console.log(arr1)
console.log(nums)

let fruits = ["apple", "mango", "cherry"];
console.log(fruits.indexOf("cherry"))
console.log(fruits.includes("banana"))
console.log(fruits.sort())
console.log(fruits.reverse())

let fruits2 = ["banana", "grapes", "orange"];
fruits.forEach(fruit => console.log(fruit));
let numbers = [1,2,3];
numbers.foreach(num => console.log(`the number is ${i *5}`));
let squared = numbers.map(num => num * num);
console.log(squared);   
console.log(numbers);

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
console.log(numbers)

numbers = [1, 2 , 3, 4];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

let newarr = numbers.concat(fruits);
console.log(newarr);
let narr = new.arrconcat(stu_info);
console.log(narr);

let words = ["Hello", "World", 0.8999];
let sentence = words.join(" _ ");
console.log(sentence);