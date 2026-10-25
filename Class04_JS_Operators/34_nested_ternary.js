// Nested Ternary
// Multiple Conditions
// age = 26
// age > 18 -> Go Goa, age > 25 -> Drink

let age = 26;

let is_pramod_enjoy = ( age > 18) ? (age > 25 ? "Goa & Drink" : "No Drink,ONly Goa") : "No Goa";
console.log(`Pramod can Enjoy ${is_pramod_enjoy}`);

let newAge = 14;

let is_valid = (newAge > 18) ?( newAge > 25 ? "Valid and enjoy" : "valide but dont enjoy") :"not valid";

console.log(is_valid);

let newScenario = 41;

let checkPark = (newScenario > 25) ? ( newScenario > 40 && newScenario < 60 ? "Go to park" : "stay in room")
: "study at home";

console.log(checkPark);