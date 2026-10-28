// Returns nothing → undefined
function logTest(name) {
    console.log(`Running: ${name}`);
    // no return statement
}


logTest("open Browser!!");
//....
logTest("do something Browser!!");
//....
logTest("closing Browser!!");


//-----------------------------------------

function  checkEnv(env){
    console.log(`Current Envirnoment is : ${env}`);
}

checkEnv("https://qa.website.com");
checkEnv("https://staging.website.com");
checkEnv("https://prod.website.com");
