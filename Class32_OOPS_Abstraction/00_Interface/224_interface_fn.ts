interface Calculator{
    add(a:number,b:number):number;
    subtract(a: number, b: number): number;
}

const calc: Calculator = {
    add: (a,b) => a+b,
    subtract: (a, b) => a - b,
}


console.log(calc.add(100,30))
console.log(calc.subtract(100,30))
