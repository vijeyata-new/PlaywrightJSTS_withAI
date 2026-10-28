function validateStatusCode(status){
    if(status >= 200 && status <=300){
        console.log("Request is fine!");
    }
}
const validateStatusCode_Exp = function(status){
    if(status >= 200 && status <=300){
        console.log("Request is fine!");
    }
    else{
        console.log("error :",status);
    }
}
const validateStatusCode_Arrow = (status) => {
     if (status >= 200 && status <= 300) {
        console.log("Request is fine!");
    }
    else{
        console.log("error : ", status);
    }
}
validateStatusCode(200);
validateStatusCode_Exp(400);
validateStatusCode_Arrow(100);