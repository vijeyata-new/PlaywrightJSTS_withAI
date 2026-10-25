let nums = [10,25,30,45];
let result = nums.find(temp => temp > 20);
console.log(result);

// findIndex
let index = nums.findIndex(n => n > 20);
console.log(index);

nums.findLast(n => n > 20); //  45
nums.findLastIndex(n => n > 20); // 3

//--------------------------------------------------------------------------

let newNum = [11, 12, 13, 14, 15];

let findRes = newNum.find(temp => temp >14);
console.log(findRes);

let findInd = newNum.findIndex(i => i > 11); // 1
console.log(findInd);

newNum.findLast(n => n >11); // 15
newNum.findLastIndex(n => n > 14); // 4
