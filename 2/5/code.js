const numbers = [];

for(;;){
    let number = +prompt("Give a number (if you give the same number again the loop stops)");
    if(numbers.includes(number)){
        alert("The number has already been given!");
        break;
    }else{
        numbers.push(number);
    }
}

numbers.sort();

for(let n of numbers) {
   console.log(n);
}
