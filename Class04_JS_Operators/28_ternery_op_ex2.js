let actualStatusCode = 200;
let expectedStatusCode = 200;

let testResult = actualStatusCode === expectedStatusCode ? "✅Test Passed" : "❌Test Failed";
console.log(testResult);

let expectedCode = 404;

let testResult2 = actualStatusCode === expectedCode ? "✅Test Passed" : "❌Test Failed";
console.log(testResult2);

for (let i = 0; i < 5; ++i) {
    console.log(i);
}