let number1 = +prompt("Anna numero 1");
let number2 = +prompt("Anna numero 2");
let number3 = +prompt("Anna numero 3");

let sum = number1 + number2 + number3;
let product = number1 * number2 * number3;
let average = sum / 3;

let trueAverage = Math.round(average);

document.querySelector("#show").innerHTML = "Summa " + sum + " tulo " + product + " keskiarvo " + trueAverage;
