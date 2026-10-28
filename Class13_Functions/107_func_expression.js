// Function as Expression

function greet(name){
    return `Hello, ${name}`;
}

// Anonymous Fn - Fn without name.
const greet1 = function (name){
    return `Hello, ${name}`;
}

console.log(greet1("Amit"));
console.log(greet("Amit"));

const statusCode = function(code){
    return `Status code is ${code}`;
}

console.log(statusCode(404));
console.log(statusCode(200));
console.log(statusCode(501));
