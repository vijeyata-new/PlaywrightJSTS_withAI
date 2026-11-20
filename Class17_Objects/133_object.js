let a = { status: "pass" };
let b = a;  //Copy the reference
b.status = "fail";
console.log(a.status);

let apiStatus = { status : "OK"};
let apiValue = apiStatus;  //Copy the reference
apiValue.status = "200";

console.log(apiStatus.status);  //200