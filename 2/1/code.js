const numbers = [];

let n = 0;

while (n < 5){
    let number = +prompt("Anna numero")
    numbers.push(number);
    n++;
}

for (let i = 4; i >= 0; i--){
    document.querySelector("#print").innerHTML += numbers[i];
}
