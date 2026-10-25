// let amul = null;
// let val = amul ?? "NANDANI Milk";
// console.log(val);


// let api_response = null;
// let responsedata = api_response ?? "{}";
// console.log(responsedata);

//nullish coalescing operator (??) is used to provide a default value when the left-hand side is
//null or undefined. In this case, if api_response1 is null or undefined, responsedata1 will be
// assigned the string "{}". Otherwise, it will take the value of api_response1.

let api_response1 = "nullish";
let responsedata1 = api_response1 ?? "{}";
console.log(responsedata1);