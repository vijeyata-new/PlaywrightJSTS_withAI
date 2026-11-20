
let data = 5;

for (let i = 1; i <= data; i++){
    let row = "";
    for (j = 1; j <= i; j++){
        row += "*";
    }
    console.log(row);
}
console.log("--------------------------------------------");
for(let m = data ; m>=1 ; m--){
    let star = "";
    for(let n = 1; n<=m;n++){
        star+="*"
    }

    console.log(star);
}

console.log("--------------------------------------------");

for(let k=1;k<=data;k++){
    let nrow = "";

    for(let l=1; l< data-k; l++){
        nrow+=" ";
    }
    for(let r=1; r<=(2*k-1); r++){
        nrow+="*";
    }

    console.log(nrow);
}