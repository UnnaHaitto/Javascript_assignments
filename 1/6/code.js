let answer = confirm("Should I calculate the square root?");

if (answer === true) {
    let n = +prompt("Give the number you want to see the square root of");
    if(n < 0){
        document.querySelector("#print").innerHTML = "The square root of a negative number is not defined";
    }
    else {
        let square = Math.sqrt(n);
        document.querySelector("#print").innerHTML = square;
    }
} else if (answer === false) {
    document.querySelector("#print").innerHTML = "The square root is not calculated!";
}