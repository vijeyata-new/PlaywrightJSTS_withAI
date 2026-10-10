KEYWORDS & IDENTIFIERS

1. Keywords
Keywords are reserved words with a special meaning in JavaScript. You cannot use them as ordinary variable or function names.
Common keywords:
- let, const, var — declare variables
- if, else, switch, case — make decisions
- for, while, break, continue — control loops
- function, return — define functions and return values
- class, new, this — work with objects and classes
- try, catch, finally, throw — handle errors
- import, export — share code between modules
- async, await — work with asynchronous code

const age = 20;

if (age >= 18) {
  console.log("Adult");
}
Remember: const and let are preferred for most modern code. Use const by default; use let when you need to reassign. Avoid var in beginner code unless you are learning older code.

2. Identifiers
An identifier is a name you choose for a variable, function, class, or similar item.
const firstName = "Asha"; // firstName is an identifier

function greetUser() {    // greetUser is an identifier
  return "Hello!";
}

Identifier rules
- May contain letters, digits, _, and $.
- Cannot start with a digit.
- Cannot contain spaces or hyphens.
- Are case-sensitive: score and Score are different.
- Cannot be a reserved keyword.
- Unicode letters are allowed, but simple English names are usually easiest to read.
let user2 = "Ravi";  // valid
let _count = 3;      // valid
let $price = 99;     // valid

// Invalid examples:
// let 2users = 5;
// let user-name = "Ravi";
// let const = 10;

3. Naming conventions
These are conventions, not syntax rules:
- Variables and functions: camelCase — totalPrice, calculateTax()
- Classes: PascalCase — ShoppingCart
- Constants that represent fixed configuration values: often UPPER_SNAKE_CASE — MAX_RETRIES
const MAX_RETRIES = 3;

function calculateTotal(price, taxRate) {
  return price + price * taxRate;
}

4. Common beginner traps
- const prevents reassignment; it does not make an object or array immutable.
- = assigns a value; === compares values without type coercion.
- JavaScript is case-sensitive: myName is not myname.
- Names should describe purpose: prefer userAge over x.
- Avoid confusing names that differ only by capitalization.
- true, false, and null are literals; undefined is a special primitive value. They are not names to use for your own variables.
const user = { name: "Asha" };
user.name = "Mina"; // allowed: object contents can change

let points = 10;
points = 15;        // allowed: let can be reassigned

console.log(5 === "5"); // false

5. Scope of var, let, and const
|Feature                        |var	            |let            |const          |
|-------------------------------|-------------------|---------------|---------------|
|Scope                          |Function-scoped    |Block-scoped   |Block-scoped   |
|Reassignment                   |Yes                |Yes            |No             |
|Redeclaration in same scope    |Yes                |No             |No             |
|Must initialize when declared  |No                 |No	            |Yes            |


Example: Block scope
if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); // 10
// console.log(b); // ReferenceError
// console.log(c); // ReferenceError


- var ignores block scope, but is limited by function scope.
- let and const exist only inside the block {} where they are declared.
- const prevents reassignment, but objects and arrays declared with it can still be modified.
Example: Function scope
function test() {
  var x = 10;
  let y = 20;
  const z = 30;
}

// None of these are accessible outside test()


Remember: Prefer const by default, use let when reassignment is needed, and generally avoid var in modern JavaScript.


The 5 rules you should know cold
1. Scope: var is function-scoped; let and const are block-scoped.

2. Hoisting: var can be accessed as undefined before assignment; accessing let or const before initialization throws a ReferenceError.

3. Redeclaration: var allows redeclaration in the same scope; let and const do not.

4. Mutation vs. reassignment: const objects can be mutated, but their variable binding cannot be reassigned.

5. Closures in loops: var callbacks often share one final loop value; let creates a separate binding per iteration.

Tricky Interview Questions
1. What is the output?
console.log(a);
var a = 10;

Answer: undefined
`var` declarations are hoisted and initialized to `undefined`. The assignment happens later.

2. What happens here?
console.log(a);
let a = 10;

Answer: ReferenceError
`let` is hoisted but remains inaccessible in the temporal dead zone (TDZ) until its declaration is evaluated.

3. What is the output?
var x = 1;
var x = 2;
console.log(x);

Answer: 2
`var` allows redeclaration in the same scope. The second assignment changes `x` to 2.

4. Does this work?
let x = 1;
let x = 2;

Answer: SyntaxError
You cannot redeclare a `let` binding in the same scope.

5. What is the output?
if (true) {
  var a = 5;
  let b = 10;
}
console.log(a);
console.log(b);

Answer: Prints 5, then throws ReferenceError
`var` is not block-scoped. `let` is accessible only inside the block.

6. What is the output?
const user = { age: 20 };
user.age = 21;
console.log(user.age);

Answer: 21
`const` prevents reassignment of the variable binding, not mutation of the object.

7. What happens here?
const score;
score = 10;

Answer: SyntaxError
A `const` declaration must be initialized when declared.

8. What is the output?
console.log(5 == "5");
console.log(5 === "5");

Answer: true, then false
`==` allows type coercion. `===` compares without converting the types.

9. What is the output?
console.log(a);
var a = 1;
function a() {}
console.log(typeof a);

Answer: First logs the function; second logs "number"
Function declarations are hoisted with their function value. The later `var a = 1` assignment replaces it when execution reaches that line.

10. What is the output?
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

Answer: 0, 1, 2
A `let` loop creates a separate binding for each iteration, so each callback captures its own value.