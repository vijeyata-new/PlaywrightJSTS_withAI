// function add(a, b, c) {
//     return a + b + c;
// }

// let num = [1, 2, 3, 5];
// console.log(add(...num));

// ----
function hasError(...codes) {
    return codes.some(c => c >= 400);
}

let responseCodes = [200, 201, 404];
let responseCodes2 = [200, 201, 404, 500];
console.log(hasError(...responseCodes));

//-------------------------------------------------

const checkValidAge = (...ages) => {
    return ages.map(a => a >= 18);
}

let age = [10,11,12,13,14,21,22,25,18];
let age2 = [1,2,4,5,6,8];

console.log(checkValidAge(...age));
console.log(checkValidAge(...age2));