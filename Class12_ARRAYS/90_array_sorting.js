let fruits = ["banana", "apple", "cherry"];
console.log(fruits);
fruits.sort();
console.log(fruits);
//  alphabetical by default


let flowers = ["rose", "lily", "tulip", "daisy"];

flowers.sort();
console.log(flowers);

flowers.forEach((flower, index) => {
    console.log(`${index}: ${flower}`);
});