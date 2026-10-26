
//map() and filter() are two commonly used array methods in JavaScript that allow you to
// transform and filter elements in an array, respectively.

//map() method creates a new array populated with the results of calling a provided function
// on every element in the calling array.

//filter() method creates a new array with all elements that pass the test implemented
// by the provided function.


const array1 = [10, 20, 30, 40, 50];

// Using map to create a new array with each element doubled
const doubledArray = array1.map(num => num*2);
console.log('Doubled Array:', doubledArray); // Output: [20, 40, 60, 80, 100]

const array2 = [50,65,35,40,55,60,95,80,75,90];

const result = array2.map(num => num >=55 ? "Pass" : "Fail");
console.log('Result:', result); // Output: ["Fail", "Pass", "Fail", "Fail", "Pass", "Pass", "Pass", "Pass", "Pass", "Pass"]


const greaterNum = array2.filter(num => num > 55);
console.log('Greater than 55:', greaterNum); // Output: [65, 60, 95, 80, 75, 90]

const fruits = ["apple", "banana", "grapes", "mango", "orange", "kiwi"];

const result1 = fruits.map(fruit => fruit.toUpperCase());
console.log('Uppercase Fruits:', result1); // Output: ["APPLE", "BANANA", "GRAPES", "MANGO", "ORANGE", "KIWI"]

const result2 = fruits.filter(fruit => fruit ==="banana" || fruit ==="kiwi" || fruit ==="cherry");
console.log('Filtered Fruits:', result2); // Output: ["banana", "kiwi"]