let year = +prompt("Anna vuosi");

if(year % 4 === 0) {
    if(year % 100 === 0){
        if(year % 400 === 0){
           document.querySelector("#print").innerHTML = "Is a leap year!";
        }
        else{
            document.querySelector("#print").innerHTML = "Not a leap year";
        }
    }
    else{ document.querySelector("#print").innerHTML = "Is a leap year!"; }
}
else{
    document.querySelector("#print").innerHTML = "Not a leap year";
}