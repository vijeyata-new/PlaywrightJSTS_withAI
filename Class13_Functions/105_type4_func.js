// Type 4 - With arg/ With return

function sumOfTwoNumbers(a,b){
    return a+b;
}

let c = sumOfTwoNumbers(4,5);
console.log(c);
console.log(sumOfTwoNumbers(4,5));

//--------------------------------------------------------------

function calculater(num1, num2, operation){
    if(operation === "add"){
        return num1 + num2;
    }
    if(operation === "sub"){
        return num1 - num2;
    }
    if(operation === "mul"){
        return num1 * num2;
    }
    if(operation === "div"){
        return num1 / num2;
    }
}

let addRes = calculater(10, 5, "add");
console.log(`Addition of 10 and 5 is: ${addRes}`);

let subRes = calculater(10, 5, "sub");
console.log(`Subtraction of 10 and 5 is: ${subRes}`);

let mulRes = calculater(10, 5, "mul");
console.log(`Multiplication of 10 and 5 is: ${mulRes}`);

let divRes = calculater(10, 5, "div");
console.log(`Division of 10 and 5 is: ${divRes}`);