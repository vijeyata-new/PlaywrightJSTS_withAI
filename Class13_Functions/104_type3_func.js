// Type 3 =  with argument/parameter but no return type.

function greetByName(name){
    console.log("Hi", name);
}

greetByName("Pramod");
greetByName("Dipak");
greetByName("Meeti");
greetByName("Sangeetha");

let name1 = greetByName("Sumit");
console.log(name1);

function greetByNameAndAge(name, age){
    console.log(`Hi ${name}, you are ${age} years old.`);
}

greetByNameAndAge("John", 30);
greetByNameAndAge("Alice", 25);
greetByNameAndAge("Bob", 40);
greetByNameAndAge("Eve", 35);