//Mutiline
const getResult = (score) => {
    if(score > 70) return "Pass";
    return "fail";
}


console.log(getResult(78));
console.log(getResult(43));

const loginById = (username,password) => {
    if(username === "user1" && password === 12345){
        return 'Login Successful';
    }
    else{
        return 'Unable to login';
    }
}

console.log(loginById("user1",12345));
console.log(loginById("user123",3433));
